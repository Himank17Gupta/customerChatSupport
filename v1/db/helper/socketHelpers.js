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
        var activeSupport = [];
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

                //loop over doc and find object with min userQueue length,  return _id for that object;
                //return _id;
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

    async assignSupportToUser(uid, sid, socketId) {
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