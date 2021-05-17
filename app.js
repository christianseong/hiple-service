const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http)

//  Add socket.io to req for use in latter requests
app.set('io', io);
io.on('connection', (socket) => {
    console.log('User has connected to socket.io');
    socket.on('disconnect', () => {
        console.log('User has disconnected');
    });
});
const mongoose = require('mongoose')

var debug = require('debug')('chatting:server');
var logger = require('morgan');
var createError = require('http-errors');

const users = require('./routes/api/users');
const chat = require('./routes/api/chatting')
const room = require('./routes/api/room');




const bodyParser = require('body-parser');
const path = require('path')
const cors = require('cors')
const passport = require('passport')





app.use(cors());

app.use(logger('dev'));

//Middle wares

//Form data middleware
app.use(express.urlencoded({
    'extended' : 'false'
}));
//Json body middleware
app.use(express.json())


//setting up the static directory 
app.use(express.static(path.join(__dirname,'client/dist')));

app.use('/api/users',users);
app.use('/api/chats', chat);
app.use('/api/room', room);

//Use the passport middleware
app.use(passport.initialize());
//Bring in the passport strategy
require('./config/passport')(passport);

//bring in the database config
const db = require('./config/keys').secret
console.log(db)


mongoose.connect(`mongodb+srv://christian:${db}@cluster0.5cnsr.mongodb.net/AllDayFootball?retryWrites=true&w=majority` , {useNewUrlParser : true , useCreateIndex : true , useUnifiedTopology : true}).then(()=>{
    console.log(`Database connected Successfully`)   
}).catch(err=>{
    console.log("Error occurred !"+err)
});

const port = process.env.PORT || '4000'

http.listen(port ,() => {
    console.log(`Server running on port: ${port}`);
});





