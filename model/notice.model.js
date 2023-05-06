const mongoose = require('mongoose');

const noticeSchema= mongoose.Schema({
    name:{type:String, required:true},
    title:{type:String, required:true},
    description:{type:String, required:true},
    date:{type:Date, default:Date.now()},
});

const Notice= mongoose.model('notice',noticeSchema);

module.exports ={
    Notice
}