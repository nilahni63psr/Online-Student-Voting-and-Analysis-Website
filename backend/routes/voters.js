var express = require('express');
var router = express.Router();

/* GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/
var voterModel=require('../models/voterModel')
router.post('/voters',(req,res)=>{
  let user=new voterModel({
    email: req.body.email,
    password: req.body.password,
    pin:req.body.pin
})
user.save()
.then(response=>res.status(200).json({message:response}))
.catch(err=>res.status(401).json({message:err}))
})

router.get('/voters',(req,res)=>{
 voterModel.find()
 .then(response=>res.send(response))
 .catch(err=>res.send(err))
})
module.exports = router;
