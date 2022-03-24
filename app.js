"use strict";

const express=require("express");
const app=express();

app.set("views","./views");
app.engine('html',require('ejs').renderFile);
app.set("view engine","html");

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