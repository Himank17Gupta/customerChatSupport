const adminCollection = require('../model/admin');
const supportCollection = require('../model/support');
const userCollection = require('../model/user');


const userOperations = {

    search(Object, res) {
        console.log('searching user');
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

    isReconnect(Object, res) {
        console.log('is Reconnect');
        userCollection.findOne({
            'userid': Object.userid
        }, (err, doc) => {
            if (err) {
                res.json('Something went Wrong');
                console.log('Error During User Search ', err);
            } else if (doc) {
                res.send(doc.reconnectID);
            }
        });
    },

}


module.exports = userOperations;



// user logout
// user check if reconnect