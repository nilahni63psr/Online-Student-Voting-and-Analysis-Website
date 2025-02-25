var express = require('express');
var router = express.Router();

/* GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/
var adminModel=require('../models/adminModel')
router.post('/admins',(req,res)=>{
  let user=new adminModel({
    name:req.body.name,
    job:req.body.job,
    email: req.body.email,
    pass: req.body.pass,
    pin:req.body.pin
})
user.save()
.then(response=>res.status(200).json({message:response}))
.catch(err=>res.status(401).json({message:err}))
})
router.get('/admins',(req,res)=>{
 adminModel.find()
 .then(response=>res.send(response))
 .catch(err=>res.send(err))
})

module.exports = router;
