var mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/studentreg',{
    useNewUrlPArser:true,
    useUnifiedTopology:true,
}).then(()=>console.log("Schema Code"));

const schma=mongoose.collection;

var studentdetail=new mongoose.Schema({
    Enrollno:Number,
    Name:String,
    City:String,
    Class:Number,
    Section:String,
    Fees:Number,
});
var StudentSchema=mongoose.model('StuSch',studentdetail)
module.exports=StudentSchema;