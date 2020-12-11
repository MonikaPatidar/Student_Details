const express=require('express');
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
const cookieparser=require('cookie-parser');
const cors=require('cors');
const StudentSchema=require('./models/studentschema');
const stdetails=require("./routes/stdetails");      


const app=express();
routes=express.Router();

//create connection
mongoose.connect('mongodb://localhost:27017/studentreg',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=> console.log("DB Connected"));

app.use(bodyparser.json());
app.use(cookieparser());
app.use(cors());
app.use('/',stdetails)



const port=process.env.PORT||8000;
app.listen(port,()=>console.log(`Server Running at Port: ${port}`));

module.exports=app;