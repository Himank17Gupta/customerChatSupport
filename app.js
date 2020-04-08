var app = require('express')();
var io = require('socket.io')(app)
const PORT = process.env.PORT || 1234;
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Methods","*");
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Expose-Headers","*");           
	next();
});

app.get('/',(req,res)=>{console.log('request on server is :',req.method);
						res.send('chat service api started');
					});
app.use('/admin',require('./v1/route/admin'));
app.use('/user',require('./v1/route/user'));
app.use('/support',require('./v1/route/support'))

app.use((req,res)=>res.send('invalid request configured'));



io.on('connection', (socket)=>{										//
console.log(socket.id);
//fn for handling and assigning support id to new conection;
})

app.listen(PORT, ()=>{
	console.log("Connected to port:" + PORT);
})