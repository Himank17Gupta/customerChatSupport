const adminCollection = require('../model/admin');
const supportCollection = require('../model/support');
const userCollection = require('../model/user');


const adminOperations = {

    addAdmin(adminObject, res) {
        console.log('adding admin');
        adminCollection.create(adminObject, err => {
            if (err) {
                res.send('Error During Add');
                console.log('Error During Add ', err);
            } else {
                res.send('Admin Record added...');
            }
        })
    },

    addSupport(adminObject, res) {
        console.log('adding support');
        supportCollection.create(adminObject, err => {
            if (err) {
                res.send('Error During Add');
                console.log('Error During Add ', err);
            } else {
                res.send('Support Record added...');
            }
        })
    },

    addUser(adminObject, res) {
        console.log('adding user');
        userCollection.create(adminObject, err => {
            if (err) {
                res.send('Error During Add');
                console.log('Error During Add ', err);
            } else {
                res.send('User Record added...');
            }
        })
    },

    getProfileDetails(adminObject, res) {
        console.log('getting profile details');
        //
        //
        //
    },

    getChatRecord(adminObject, res) {
        console.log('getting chat record');
        //
        //
        //
    },


    deleteAdmin(adminObject, res) {
        console.log('doing admin delete');
        adminCollection.deleteOne({
            userid: adminObject.userid
        }, (err, doc) => {
            if (err) {
                res.send('Something went Wrong');
                console.log('Error During User Delete Search ', err)
            } else {
                res.send('admin deleted!');
            }
        });

    },

    deleteSupport(adminObject, res) {
        console.log('doing support delete');
        adminCollection.deleteOne({
            userid: adminObject.userid
        }, (err, doc) => {
            if (err) {
                res.send('Something went Wrong');
                console.log('Error During User Delete Search ', err)
            } else {
                res.send('support deleted!');
            }
        });

    },

    deleteUser(adminObject, res) {
        console.log('doing user delete');
        adminCollection.deleteOne({
            userid: adminObject.userid
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