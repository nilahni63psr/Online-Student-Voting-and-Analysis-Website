var express = require('express');
var router = express.Router();

/* GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/
var candidateModel=require('../models/candidateModel')
router.post('/candidates',(req,res)=>{
  let user=new candidateModel({
    name:req.body.name,
    img:req.body.img,
    desc: req.body.desc,
    votes: req.body.votes || 0 
})
user.save()
.then(response=>res.status(200).json({message:response}))
.catch(err=>res.status(401).json({message:err}))
})
router.get('/candidates',(req,res)=>{
 candidateModel.find()
 .then(response=>res.send(response))
 .catch(err=>res.send(err))
})
router.patch('/candidates/:id', (req, res) => {
  const candidateId = req.params.id;
  candidateModel.findByIdAndUpdate(
      candidateId,
      { $inc: { votes:1 } }, 
      { new: true })
      .then(response => {
          res.status(200).json({ message: response });
      })
      .catch(err => { 
          res.status(401).json({ message: err });
      })
    })
router.delete('/candidates/:id',(req,res)=>{
  const candidateId = req.params.id;
  const updatedData = req.body;
candidateModel.findByIdAndDelete(candidateId,updatedData, { new: true })
.then(response => res.status(200).json({ message: response }))
.catch(err => res.status(404).json({ message: "Candidate not found" }));
})
 module.exports=router;