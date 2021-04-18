const mongoose = require('mongoose');

//Schema
const Schema = mongoose.Schema;
const ApplicationDetailsAfterReviewSchema = new Schema({
    ApplicationDetailsAfterReview: {},
    ReviewForApplication: '',
    date: {
        type: String,
        default: Date.now()
    }
});

//Model
const ApplicationDetailsAfterReview = mongoose.model('ApplicationDetailsAfterReview',ApplicationDetailsAfterReviewSchema);

module.exports = ApplicationDetailsAfterReview;