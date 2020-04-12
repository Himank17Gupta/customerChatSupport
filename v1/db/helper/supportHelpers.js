const adminCollection = require('../model/admin');
const supportCollection = require('../model/support');
const userCollection = require('../model/user');


const supportOperations = {

    search(Object, res) {
        console.log('searching support');
        adminCollection.findOne({
            'userid': Object.userid
        }, (err, doc) => {
            if (err) {
                console.log('err is :', err);
                //   res.send('Invalid User Credentials');
            } else if (doc) {
                if (doc.password == reqObject.password) {
                    res.send(doc);
                } else {
                    //res.send('Invalid User Credentials');
                }
            } else {
                //  res.send('Invalid User Credentials');
            }
        });
    },

    getAllActiveSupport(Object, res) {
        supportCollection.find({
            'isActiveNow': true
        }, (err, doc) => {
            if (err) {
                res.json('Something went Wrong');
                console.log('Error during getAllActiveSupport List');
            } else if (doc) {
                console.log('doc is:', doc);
                var supportArr = [];
                doc.forEach(obj => {
                    supportArr.push(obj._id);
                });
                console.log('supportArr is :', supportArr);
                res.send(supportArr);
            }
        });
    },

    getAllUsersinQueue(Object, res) {
        supportCollection.findById({}, (err, doc) => {
            if (err) {
                res.json('Something went Wrong');
                console.log('Error during getAllUsersinQueue List');
            } else if (doc) {
                console.log('doc is:', doc);

                res.send(doc.userQueue);
            }
        })
    },



}


module.exports = supportOperations;



// support logout
// support get suitable ID to connect
// get all active users in the queue
// switch bw users 
// socket send message
// socket recieve message
// socket ask for feedback
// socket recieve feedback
// socket reconnect 
// notification  new message alert