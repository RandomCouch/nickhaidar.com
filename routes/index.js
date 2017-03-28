var express = require('express');
var router = express.Router();
var React = require('react');
var ReactDOM = require('react-dom/server');
var DOM = React.DOM;
var config = require('../config.js');
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: config.username,
        pass: config.pass
    }
});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {title:"Nick Haidar", session: req.sess});
    
});
router.post('/sendMail', function(req,res,next){
   var email = req.body.email;
   var message = req.body.message;
   var actualMessage = "From " + email + ", \n" + message;
   
   console.log("Sending email from " + email + ": "  + message);
   let mailOption = {
       from: email,
       to: "Target@Gmail.com",
       subject: "Contact Message from NickHaidar.com",
       text: actualMessage
   };
   transporter.sendMail(mailOption, (error,info) => {
        if (error) {
            console.log(error);
        }
        console.log("Message is sent : " + JSON.stringify(info));
   });
   res.send("Email sent");
});

module.exports = router;
