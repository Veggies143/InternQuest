const express = require('express');

const ApplicationDetails = require('../models/ApplicationDetails');

const router = express.Router();

//Routes
router.get('/',(req,res) => {
    
    ApplicationDetails.find({ })
        .then((data) => {
            console.log('Data: ',data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ',daerrorta);
        });

})

router.get('/name',(req,res) => {
    const data = {
        username:'vishnu',
        age:21
    }
    res.json(data);
})


module.exports = router;