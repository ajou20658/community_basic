"use strict";

const express=require("express");
const app=express();
const bodyParser= require("body-parser");
const req = require("express/lib/request");
const User=require("./js/models/User");
const Userstorage=require("./js/models/userstorage");

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
  const user=new User(req.body);
  const response= user.login();
  return res.json(response);

  // const success="";
  // const msg="";
  // console.log(userstorage.getusers("id","pswd","name"));

  // if(user.users.id.includes(id)){
  //   const idx=user.users.id.indexOf(id);
  //   if(user.users.pswd[idx]===pswd){    
  //     this.success="true";
  //     return res.json({
  //       success
  //     });
  //   }
  // }
  // this.success="false";
  // return res.json({
  //   success,
  //   msg
  // });
});

