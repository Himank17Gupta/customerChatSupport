var app = require('express')();
var io = require('socket.io')(server);

const PORT = process.env.PORT || 1234;
var bodyParser = require('body-parser');
const socketOperations = require('./v1/db/helper/socketHelpers');

app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Methods", "*");
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Expose-Headers", "*");
	next();
});

app.get('/', (req, res) => {
	console.log('request on server is :', req.method);
	res.send('chat service api started');
});
app.use('/auth', require('./v1/route/authservice'));
app.use('/admin', require('./v1/route/admin'));
app.use('/user', require('./v1/route/user'));
app.use('/support', require('./v1/route/support'));
app.use('/test', require('./v1/route/testservice'));
app.use('/question', require('./v1/route/questionservice'));

app.use((req, res) => res.send('invalid request configured'));



io.on('connection', (socket) => {
	console.log(socket.id);
	console.log('New Connection Established: ', socket.request.connection._peername + ' Total number of connections:', io.sockets.server.engine.clientsCount);

	//(//also think about setting a map of user_id with socket_id, as will be very handy then//)//
	socket.on('Validate_connection', (data) => {
		// data._id will tell if user or support, accordingly set socket ID in the schema,
		var role = socketOperations.getRoleOnConnect(data.id);
		// if user
		if (role == 'user') {
			// fn for handling and assigning support id to new conection,

			// get list of all active support, find one with least userQueue,
			var SupportId = socketOperations.getSuitableActiveSupport();
			// assign support ID assigned to that support profile with that of user and to reconnectid as well,
			socketOperations.assignSupportToUser(data.id, SupportId);
			// also add the user._id to userQueue of that support profile.
			socketOperations.updateSupportQueue(SupportId, data.id, 'add');

		} else if (role == "support") {
			// set active true;
			socketOperations.setSupportActive(data.id, true);
		}
		socketOperations.mapSocketIdwithUserId(data.id, socket.id, 'add');

	});


	socket.on('message_from_customer', (data) => { //	data-->{senderId,text:{"msg",timestamp}}
		var socketIdofSender = socketOperations.getSocketIdWithID(data.senderId);
		var suitableSupportID = socketOperations.retrieveSupportforUser(data.senderId);
		var socketIdofReciever = socketOperations.getSocketIdWithID(suitableSupportID);
		socket.to(socketIdofReciever).emit('messagefromcustomer', data);
	});
	socket.on('message_from_support', (data) => { //	data-->{recieverId(same as userID with which the message has been recieved),text:{"msg",timestamp}}
		var socketIdofReciever = socketOperations.getSocketIdWithID(data.receiverId);
		socket.to(socketIdofReciever).emit('messagefromSupport', data);
	});

	socket.on('message_from_support', (data) => { //	data-->{senderId,}
		var socketIdofSender = socketOperations.getSocketIdWithID(data.sender);
		var socketIdofReciever = socketOperations.getSocketIdWithID(data.receiver);
		//socketOperations.privateMessage(data,data.sender,data.reciever);
		//	socket.to(socketIdofReciever,data.msg,data.sender);
	});


	socket.on('disconnect', (data) => {
		var role2 = socketOperations.getRoleOnConnect(data.id);
		if (role2 == 'user') {
			var SupportId2 = socketOperations.getAssignedSuppportId(data.id);
			socketOperations.updateSupportQueue(SupportId2, data.id, 'remove');
			socketOperations.removeSupportAssignedToUser(data.id);
		} else if (role == "support") {
			socketOperations.setSupportActive(data.id, false);
			//	run validate_connection for user function again
			//  run assign the userQueue to available support profiles

		}
		socketOperations.mapSocketIdwithUserId(data.id, socket.id, 'remove');
	});
})

var server = app = app.listen(PORT, () => {
	console.log("Connected to port:" + PORT);
})
module.exports = io;