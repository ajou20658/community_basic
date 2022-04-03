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

app.post("/login",(req,res)=>{
  const user=new User(req.body);
  const response= user.login();
  return res.json(response);
});

app.post("/register",(req,res)=>{
  const user=new User(req.body);
  const response= user.register();
  return res.json(response);
})

app.listen(3000,()=>{
  console.log("Server On");
})
