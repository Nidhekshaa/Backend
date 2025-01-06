const express = require('express');
const app = express();
//app.set('view engine','ejs');
app.get('/',(req,res)=>{
    console.log("hello");
    //res.status(500).send("error occured");
    //res.status(200).send({text:"success"});
    //res.json({express:"learning express"});
    res.send("hello world"); //print on the web
    //res.render("index.ejs",{text :"world"});
});
const userRoute = require('./routes/User');
app.use('/User',userRoute);

app.listen(3000);
