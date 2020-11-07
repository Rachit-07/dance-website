const express = require("express"); // including the module express
const app = express();
const path=require("path");
const fs=require("fs");
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static',express.static('static'));  //for serving static files
// app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine','pug'); // set the template engine as pug
app.set('views', path.join(__dirname,'views'));// set the views directory 

// ENDPOINTS
app.get('/',(req,res)=>{
    const param = {}
    res.status(200).render('home.pug',param);
});
app.get('/contact',(req,res)=>{
    const param = {}
    res.status(200).render('contact.pug',param);
});


app.listen(port,()=>{   // listen is used for listening the port
    console.log(`the application started successfully on port ${port}`);
});  