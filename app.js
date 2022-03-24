"use strict";

const express=require("express");
const app=express();
const bodyParser= require("body-parser");

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
    console.log(req.body);
})
app.listen(3000,()=>{
    console.log("Server On");
})