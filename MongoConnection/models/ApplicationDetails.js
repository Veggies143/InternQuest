const mongoose = require('mongoose');

//Schema
const Schema = mongoose.Schema;
const ApplicationDetailsSchema = new Schema({
    YHire: String,
    DuraAvailable: String,
    date: {
        type: String,
        default: Date.now()
    }
});

//Model
const ApplicationDetails = mongoose.model('ApplicationDetails',ApplicationDetailsSchema);

module.exports = ApplicationDetails;