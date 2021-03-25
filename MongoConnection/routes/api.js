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

router.post('/saveApplicationDetails',(req,res) => {
    console.log(req.body);
    const data = req.body;
    const newApplicationDetails =  new ApplicationDetails(data);
    newApplicationDetails.save((error) => {
        if(error) {
            res.status(500).json({msg: 'Sorry, Internal server error'});
            return;
        }
        return res.json({
            msg: 'Your data has been received'
        });
    });

});

router.get('/name',(req,res) => {
    const data = {
        username:'vishnu',
        age:21
    }
    res.json(data);
})

module.exports = router;