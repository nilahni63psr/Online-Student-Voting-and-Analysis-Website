const mongoose=require('mongoose')
const electionSchema=mongoose.Schema({
    election:String,
    date:Date,
    description:String
})
const electionModel=new  mongoose.model('election',electionSchema)
module.exports=electionModel