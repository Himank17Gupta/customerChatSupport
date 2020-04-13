const adminCollection = require('../model/admin');
const supportCollection = require('../model/support');
const userCollection = require('../model/user');


const supportOperations = {

    async search(Object, res) {
        var trigg = "false";
        console.log('searching support');
        await supportCollection.findOne({
            'name': Object.name
        }, (err, doc) => {
            if (err) {
                console.log('err is :', err);
                trigg = false;
                //   res.send('Invalid User Credentials');
            } else if (doc) {
                if (doc.password == Object.password) {
                    res.send(doc);
                    trigg = true;
                } else {
                    trigg = false;
                    //res.send('Invalid User Credentials');
                }
            } else {
                trigg = false;
                //  res.send('Invalid User Credentials');
            }
        });
        return trigg;
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
        supportCollection.findById(Object.support_id, (err, doc) => {
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