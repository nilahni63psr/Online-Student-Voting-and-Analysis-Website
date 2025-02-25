var express = require('express');
var router = express.Router();

/* GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/
var electionModel=require('../models/electionModel');
const candidateModel = require('../models/candidateModel');
router.post('/election',(req,res)=>{
  let user=new electionModel({
    election:req.body.election,
    date:req.body.date,
    description: req.body.description
})
user.save()
.then(response=>res.status(200).json({message:response}))
.catch(err=>res.status(401).json({message:err}))
})
router.get('/elections',(req,res)=>{
  electionModel.find()
 .then(response=>res.send(response))
 .catch(err=>res.send(err))
})

module.exports = router;
