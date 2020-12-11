const StudentSc=require('../models/studentschema');
const express=require('express');
const app=express();
var router = express.Router();
console.log("running router file");

router.get("/",function(req,res,next){
    console.log("get running");
});


router.post("/", function(req,res,next){
  var StudentSchema = new StudentSc({
    Enrollno: req.body.Enrollno,
    Name: req.body.Name,
    City:req.body.City,
    Class :req.body.Class,
    Section :req.body.Section,
    Fees :req.body.Fees,
  });
    //Save values in DB
    StudentSchema.save(function(err,res1){
    if(err) throw error;
    console.log("running router file");
  });
  });
  
  module.exports=router;