//step 1- initialise npm using npm init
//step2- install express using npm i express
//step3- install body-parser ie MIDDLEWARE  using npm i body-parser

//step4- install path to get dir_name-      npm i path
//step5- install url to get dir_name-      npm i url

//install ejs npm i ejs

//step6- write server app
import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";

import {dirname} from "path";                   //for __dirname
import {fileURLToPath} from "url";              //for __dirname

//to use express:
const app=express();

//to render both html & css----> if i do not add this then css is not rendered
app.use(express.static('public'))

const port=3000;

const __dirname=dirname(fileURLToPath(import.meta.url));              //for __dirname

//TO MOUNT THE MIDDLEWARE BODY-PARSER USING .use() method
//html forms deal with:     .urlencoded
//.urlencoded({ extended: true }) to create body for form submission
app.use(bodyParser.urlencoded({ extended: true }))                //copy from documentation of body-parser

//to get request send to html page:
app.get("/",function(req,res){
    //give html page
    // console.log(__dirname+"/index.html")     to get full path of our html file
    // res.sendFile(__dirname+"/public/index.html");      //provide full dir name using __dirname and index.html form page
    // res.sendFile(__dirname+"/styles.css");

    res.render("index.ejs");
});

//in index.html form-> /submit POST request
app.post("/submit",function(req,res){
    //use body parser to get info from d html form and add its data to req object so that we can console.log it
    console.log(req.body);  //prints form contents when user clicks submit button

    //to print output on new /submit page
    // res.send(`<h1>Your username is</h1><h2>${req.body.first}${req.body.last}</h2>`);

    const userName=req.body.first+req.body.last;
    res.render("index.ejs",{outputName:userName}); 
});
//prints our input as {name_of_html_form:"our value"}

app.post("/reset",function(req,res){
    res.render("index.ejs");
});

//step8:listen
app.listen(port,function(){
    console.log(`Server running at ${port}`);
});

//step9- use nodemon to run-           nodemon index.js
//step10- run server app using localhost:port_number