const mongoose=require('mongoose')
const adminSchema=mongoose.Schema({
    name:String,
    job:String,
    email:String,
    pass:String,
    pin:Number

})
const adminModel=new  mongoose.model('admins',adminSchema)
module.exports=adminModel