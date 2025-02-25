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
/* router.post('/voters', (req, res) => {
  voterModel.findOne({ email: req.body.email })
    .then(existingVoter => {
      if (existingVoter) {
        return res.status(400).json({ message: "You have already registered with this pin." });
      } else {
        let user = new voterModel({
          email: req.body.email,
          password: req.body.password,
          pin: req.body.pin
        });
        user.save()
          .then(response => res.status(200).json({ message: "Voter registered successfully!" }))
          .catch(err => res.status(500).json({ message: "Error saving voter.", error: err }));
      }
    })
    .catch(err => res.status(500).json({ message: "Error checking for existing pin.", error: err }));
});
 */
router.get('/voters',(req,res)=>{
 voterModel.find()
 .then(response=>res.send(response))
 .catch(err=>res.send(err))
})
module.exports = router;
