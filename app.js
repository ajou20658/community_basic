"use strict";

const express=require("express");
const app=express();
const bodyParser= require("body-parser");
const req = require("express/lib/request");
const user=require("./js/models/userstorage");


app.set("views","./views");
app.engine('html',require('ejs').renderFile);
app.set("view engine","html");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extends:true}));
app.use(express.static(`${__dirname}/js`))

app.get("/",(req,res)=>{
  res.render("index");
})
app.get("/login",(req,res)=>{
  res.render("login");
})
app.get("/register",(req,res)=>{
  res.render("register");
})

app.listen(3000,()=>{
  console.log("Server On");
})

app.post("/login",(req,res)=>{
  const id=req.body.id;
  const pswd=req.body.pswd;
  console.log(user.users);
  if(user.users.id.includes(id)){
    const idx=user.users.id.indexOf(id);
    if(user.users.pswd[idx]===pswd){    
      return res.json({
          success: true,
      });
    }
  }

  return res.json({
    success:false,
    msg: "로그인 실패",
  });
});

