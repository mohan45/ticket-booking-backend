import express from 'express';
import constant from './constant';
import mongoose from 'mongoose';
var cors = require('cors')


const app = express();
app.use(express.json({limit: '5mb'}));
app.use(cors())
app.use(express.urlencoded({limit: '5mb', extended: true}));


const server = app.listen(constant.PORT, () => {
    console.log(`app listing in port ${ constant.PORT }`);
})

//GET test route
app.get('/test', (req, res) => {
    res.send('Ticket booking backend connected successfully');
});

//Mongoose
mongoose.connect(constant.MONGODB_URL, {  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false }, (err) => {
    err ? console.log('Database connection failed'): console.log('Database connection successful');
});

app.post('/tickets/create', require('./route/ticket/create').create);
app.get('/ticket/findOne', require('./route/ticket/getRandomTicket').findOne);