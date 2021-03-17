const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const { strict } = require('node:assert');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const MONGODB_URI = "mongodb+srv://Veggies_143:Veggies@143@internquestcluster.cdzc2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URI || 'mongodb://localhost/internQ', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!')
});

//Schema
const Schema = mongoose.Schema;
const ApplicationDetailsSchema = new Schema({
    YHire: String,
    DurationAvail: String,
    date: {
        type: String,
        default: Date.now()
    }
});

//Model
const ApplicationDetails = mongoose.model('ApplicationDetails',ApplicationDetailsSchema);

//saving data to our mongo database
const data = {
    YHire: 'I am eligible',
    DurationAvail: 'Yes available'
};

const newApplicationDetails = new ApplicationDetails(data);   //instance of the model
newApplicationDetails.save((error) => {
    if(error) {
        console.log("Oops, something happened");
    }
    else {
        console.log("Data has been saved!!!");
    }
});
//.save()




//HTTP request logger
app.use(morgan('tiny'));

//Routes
app.get('/api',(req,res) => {
    const data = {
        username:'tejaswini',
        age:20
    }
    res.json(data);
})

app.get('/api/name',(req,res) => {
    const data = {
        username:'vishnu',
        age:21
    }
    res.json(data);
})

app.listen(PORT,console.log(`Server is starting at ${PORT}`))