const ex = require("express");
const bp = require("body-parser");
const app = ex();
const port = 3005;
const path = require('path')
app.use(ex.static("public"));
app.use(bp.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})
app.post("/",(req,res)=>{
    console,log(req.body);
})
app.listen(port,()=>{
    console.log("running at 3005");
})