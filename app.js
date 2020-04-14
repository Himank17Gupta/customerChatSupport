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

app.use((req, res) => res.send('invalid request configured'));



io.on('connection', (socket) => {
	console.log(socket.id);
	console.log('New Connection Established: ', socket.request.connection._peername + ' Total number of connections:', io.sockets.server.engine.clientsCount);

	//(//also think about setting a map of user_id with socket_id, as will be very handy then//)//
	socket.on('Validate_connection', (data) => {
		// data._id will tell if user or support, accordingly set socket ID in the schema,
		// if user 
		//fn for handling and assigning support id to new conection;
		// get list of all active support, find one with least userQueue, 
		// assign support ID assigned to that support profile with that of user and to reconnectid as well,
		// also add the user._id to userQueue of that support profile.
		// else if support set active true;
	});


	socket.on('message', (data) => {
		//socketOperations.privateMessage(data,data.sender,data.reciever);
	});

	socket.on('disconnect', (data) => {
		// map disconnecting socket 
		//if user 
		// remove from userQueue of support, set socketID as null, set is Active as false, set reconnect id false as well;
		//if support 
		// set is Active false, run validate_connection for user function again
	});
})

var server = app = app.listen(PORT, () => {
	console.log("Connected to port:" + PORT);
})
module.exports = io;