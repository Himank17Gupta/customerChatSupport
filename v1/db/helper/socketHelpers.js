const adminCollection = require('../model/admin');
const supportCollection = require('../model/support');
const userCollection = require('../model/user');

var mapCollectionIDwithSocketID = {};

const socketOperations = {


    getRoleOnConnect(id) {

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


    getSuitableActiveSupport() {
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
    setSupportActive(id) {
        supportCollection.updateOne({
            "_id": id
        }, {
            $set: {
                isActiveNow: true
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
    mapSocketIdwithUserId(uid, socketId) {
        mapCollectionIDwithSocketID[uid] = socketId;
    },
    assignSupporttoUser(uid, sid, socketId) {

    },
    updateSupportQueue(sid, uid) {

    },

    onDisconnect() {

    }


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