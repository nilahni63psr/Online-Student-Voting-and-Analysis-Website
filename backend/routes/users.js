var express = require('express');
var router = express.Router();

/* GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/
var userModel=require('../models/userModel')
router.post('/signup',(req,res)=>{
  let user=new userModel({
  username:req.body.username,
  email:req.body.email,
  password:req.body.password
})
user.save()
.then(response=>res.status(200).json({message:response}))
.catch(err=>res.status(401).json({message:err}))
})
router.get('/signup',(req,res)=>{
 userModel.find()
 .then(response=>res.send(response))
 .catch(err=>res.send(err))
})
module.exports = router;
