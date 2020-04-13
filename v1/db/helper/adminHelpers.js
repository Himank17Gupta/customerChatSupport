const adminCollection = require('../model/admin');
const supportCollection = require('../model/support');
const userCollection = require('../model/user');


const adminOperations = {

    addAdmin(Object, res) {
        console.log('adding admin');
        Object.role = 'admin';
        Object.creationDate = Date.now();
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
        Object.creationDate = Date.now();
        Object.role = "support";
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
        Object.creationDate = Date.now();
        Object.role = "user";
        userCollection.create(Object, err => {
            if (err) {
                res.send('Error During Add');
                console.log('Error During Add ', err);
            } else {
                res.send('User Record added...');
            }
        })
    },


    async search(Object, res) {
        var trigg = "false";
        console.log('searching admin');
        await adminCollection.findOne({
            'name': Object.name
        }, (err, doc) => {
            if (err) {
                console.log('err is :', err);
                trigg = false;
            } else if (doc) {
                if (doc.password == Object.password) {
                    res.send(doc);
                    trigg = false;
                } else {
                    trigg = false;
                }
            } else {
                trigg = false;
            }
        });
        return trigg
    },

    getProfileDetails(Object, res) {
        console.log('getting profile details');


    },

    getChatRecord(Object, res) {
        console.log('getting chat record');
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
            name: Object.name
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
        supportCollection.deleteOne({
            name: Object.name
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
        userCollection.deleteOne({
            name: Object.name
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
// delete user 
// delete support
// get chat records