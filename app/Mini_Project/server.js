var express = require("express");
var app = express();
var bodyparser = require("body-parser");
app.use(express.static(__dirname+"/../Mini_Project"));
app.use(bodyparser.json());
app.get("/",function (req,res) {
   res.redirect("/index.html");
});

app.post("/api/login",function (req,res) {
    var uname = req.body.u_name;
    var upwd = req.body.u_pwd;

    if(uname=="admin" && upwd=="admin"){
        res.send({login:"success"});
    }else{
        res.send({login:"failure"});
    }
});


app.listen(8080);
console.log("Server Listening the Port No.8080");