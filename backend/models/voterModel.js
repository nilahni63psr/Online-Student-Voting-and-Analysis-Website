const mongoose=require('mongoose')
const voterSchema=mongoose.Schema({
    email:String,
    password:String,
    pin:Number
})
const voterModel=new  mongoose.model('voters',voterSchema)
module.exports=voterModel