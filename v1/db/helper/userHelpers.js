const adminCollection = require('../model/admin');
const supportCollection = require('../model/support');
const userCollection = require('../model/user');


const userOperations = {

    async search(Object, res) {
        var trigg = "false";
        console.log('searching user');
        await userCollection.findOne({
            'name': Object.name
        }, (err, doc) => {
            if (err) {
                console.log('err is :', err);
                trigg = false;
            } else if (doc) {
                if (doc.password == Object.password) {
                    res.send(doc);
                    trigg = true;
                } else {
                    trigg = false;
                }
            } else {
                trigg = false;
            }
        });
        return trigg;
    },

    isReconnect(Object, res) {
        console.log('is Reconnect');
        userCollection.findOne({
            'name': Object.name
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