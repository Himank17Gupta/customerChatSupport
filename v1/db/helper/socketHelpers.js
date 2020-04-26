const adminCollection = require('../model/admin');
const supportCollection = require('../model/support');
const userCollection = require('../model/user');

var mapCollectionIDwithSocketID = {};

const socketOperations = {


    async getRoleOnConnect(id) {

        await supportCollection.findById(id, (err, data) => {
            if (err) {
                console.log(err);
            } else if (data) {
                return data.role;
            }
        })
        await userCollection.findById(id, (err, data) => {
            if (err) {
                console.log(err);
            } else if (data) {
                return data.role;
            }
        })

    },


    async getSuitableActiveSupport() {
        var activeSupport;
        var min = 1000;
        console.log('getting active support');
        await supportCollection.find({
            'isActiveNow': true
        }, {
            '_id': 1,
            'userQueue': 1
        }, (err, doc) => {
            if (err) {
                console.log(err);
                return null;
            }
            if (doc) {
                console.log(doc);
                doc.forEach(obj => {
                    if (obj.userQueue.length < min) {
                        min = obj.userQueue.length;
                        activeSupport = obj._id;
                    }
                })
                return activeSupport;
            }
        });


    },
    async setSupportActive(id, value) {
        supportCollection.updateOne({
            "_id": id
        }, {
            $set: {
                isActiveNow: value
            }
        }, (err, doc) => {
            if (err) {
                console.log(err);
                return 0;
            } else {
                return 1;
            }
        })

    },

    async mapSocketIdwithUserId(uid, socketId, opn) {
        if (opn == "add") {
            mapCollectionIDwithSocketID[uid] = socketId;
        } else if (opn == "remove") {
            delete mapCollectionIDwithSocketID.uid;
        }
    },

    getSocketIdWithID(id) {
        return mapCollectionIDwithSocketID[id];
    },

    async assignSupportToUser(uid, sid) {
        await userCollection.updateOne({
            "_id": uid
        }, {
            $set: {
                reconnectId: sid
            }
        }, (err, doc) => {
            if (err) {
                console.log(err);
                return 0;
            } else {
                return 1;
            }
        })
    },
    async retrieveSupportforUser(uid) {
        await userCollection.findById(uid,
            (err, doc) => {
                if (err) {
                    console.log(err);
                    return 0;
                } else if (doc) {
                    return doc.reconnectId;
                }
            })
    },


    async removeSupportAssignedToUser(uid) {
        await userCollection.updateOne({
            "_id": uid
        }, {
            $set: {
                reconnectId: null
            }
        }, (err, doc) => {
            if (err) {
                console.log(err);
                return 0;
            } else if (doc) {
                return 1;
            }
        })
    },

    async getAssignedSuppportId(uid) {
        await userCollection.findById(uid, (err, doc) => {
            if (err) {
                console.log(err);
            } else if (doc) {
                return doc.reconnectId;
            }
        })
    },

    async updateSupportQueue(sid, uid, opn) {
        //opn == add/remove
        if (opn == "add") {
            await supportCollection.update({
                "_id": sid
            }, {
                $push: {
                    userQueue: uid
                }
            }, (err, doc) => {
                if (err) {
                    console.log('Error During pushing uid ', err);
                } else {
                    console.log('uid added');
                }
            })
        } else if (opn == "remove") {

            // extract array from collection,copy in a local array, remove the object with uid in local array, set the local array to support collection 
            let localarray = [];
            await supportCollection.findById(sid, (err, doc) => {
                if (err) {
                    console.log('Error During pushing uid ', err);
                } else {
                    localarray = doc.userQueue;

                    for (let i = 0; i < localarray.length; i++) {
                        if (localarray[i] == uid) {
                            localarray.splice(i, 1);
                        }
                    }

                    await supportCollection.updateOne({
                        "_id": sid
                    }, {
                        $set: {
                            userQueue: localarray
                        }
                    }, (err, doc) => {
                        if (err) {
                            console.log(err);
                            return 0;
                        } else {
                            return 1;
                        }
                    })


                }
            });

        }
    },

    async onDisconnect() {

    },


}


module.exports = socketOperations;



// socket find j and establish connection
// socket send message
// socket recieve message
// socket ask for feedback
// socket recieve feedback
// socket reconnect 
// user socket emit connect
// user socket on message
// user socket on recieves