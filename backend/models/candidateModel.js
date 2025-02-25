const mongoose=require('mongoose')
const candidateSchema=mongoose.Schema({
    name:String,
    img:String,
    desc:String,
    votes:Number
})
const candidateModel=new  mongoose.model('candidates',candidateSchema)
module.exports=candidateModel