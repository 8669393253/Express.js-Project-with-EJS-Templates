const express=require("express");
const app=express();
const path=require("path");

let port =8080;
app.set("views engine, ejs")
app.set("views",path.join(__dirname, "/views"))

app.listen(port,()=>{
    console.log(`app is listening on ${port}`);
});

app.get("/",(req,res)=>{
    res.send("Hello everyone!!");
});

app.get("/register",(req,res)=>{
    res.render("home.ejs");
});

app.get("/rollDice",(req,res)=>{
    let value= Math.floor(Math.random() * 6) + 1 ;
    res.render("dice.ejs", {value});
});

app.get("/Instagram/:username",(req,res)=>{
    let {username}=req.params
    res.render("Instagram.ejs",{username});
});

app.get("*",(req,res)=>{
    res.send("Error while loading the page");
});

