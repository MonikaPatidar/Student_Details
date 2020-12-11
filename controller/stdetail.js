const StudentSchema=require('../models/studentschema');

exports.adddetail= (req,res,next)=>{
    bodydata=req.body;
    console.log(bodydata);
    const stdetails=new StudentSchema({
        
    });
    stdetails.save(err,res1){
        console.log("running entry detail");
    };
}