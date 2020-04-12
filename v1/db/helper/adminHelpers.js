const adminCollection = require('../model/admin');
const supportCollection = require('../model/support');
const userCollection = require('../model/user');


const adminOperations = {

    addAdmin(Object, res) {
        console.log('adding admin');
        adminCollection.create(Object, err => {
            if (err) {
                res.send('Error During Add');
                console.log('Error During Add ', err);
            } else {
                res.send('Admin Record added...');
            }
        })
    },

    addSupport(Object, res) {
        console.log('adding support');
        supportCollection.create(Object, err => {
            if (err) {
                res.send('Error During Add');
                console.log('Error During Add ', err);
            } else {
                res.send('Support Record added...');
            }
        })
    },

    addUser(Object, res) {
        console.log('adding user');
        userCollection.create(Object, err => {
            if (err) {
                res.send('Error During Add');
                console.log('Error During Add ', err);
            } else {
                res.send('User Record added...');
            }
        })
    },


    search(Object, res) {
        console.log('searching admin');
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

    getProfileDetails(Object, res) {
        console.log('getting profile details');
        //
        //
        //
    },

    getChatRecord(Object, res) {
        console.log('getting chat record');
        //
        //
        //
    },

    updateRoleandRights(Object, res) {
        console.log('updating roles and rights');
        //
        //
        //
    },

    deleteAdmin(Object, res) {
        console.log('doing admin delete');
        adminCollection.deleteOne({
            userid: Object.userid
        }, (err, doc) => {
            if (err) {
                res.send('Something went Wrong');
                console.log('Error During User Delete Search ', err)
            } else {
                res.send('admin deleted!');
            }
        });

    },

    deleteSupport(Object, res) {
        console.log('doing support delete');
        adminCollection.deleteOne({
            userid: Object.userid
        }, (err, doc) => {
            if (err) {
                res.send('Something went Wrong');
                console.log('Error During User Delete Search ', err)
            } else {
                res.send('support deleted!');
            }
        });

    },

    deleteUser(Object, res) {
        console.log('doing user delete');
        adminCollection.deleteOne({
            userid: Object.userid
        }, (err, doc) => {
            if (err) {
                res.send('Something went Wrong');
                console.log('Error During User Delete Search ', err)
            } else {
                res.send('user deleted!');
            }
        });

    },
}
module.exports = adminOperations;






// register user
// register support
// register admin
// get details of users/support
// get user/support details
// delete user 
// delete support
// get chat records