const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const hbs = require("hbs");
const connectdb =require("./db/conn.js");
const User = require("./models/user.js");
const bcrypt = require("bcrypt");
const alert = require("alter");
require('dotenv').config(); 

const app = express();

const loginPath = path.join(__dirname,"../public");
const viewsPath = path.join(__dirname,"../templates/views");
// const partialsPath = path.join(__dirname,"../templates/partials");

const PORT = process.env.PORT ;


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(loginPath));
app.set("view engine","hbs");

app.set("views",viewsPath);
// hbs.registerPartial(partialsPath);

app.get("/", (req,res)=>{
    res.render("wetube")
    
})
app.get("/register", (req,res)=>{
    res.render("register")
})

app.get("/login", (req,res)=>{
    res.render("login")
})
app.get("/index",async (req,res)=>{
    const key = process.env.KEY;
    const yt_url = process.env.YT_URL;
    const channel_url = process.env.CHANNEL_URL;
    try {
        const q = req.query.search
        const response = await fetch(`${yt_url}&q=${q}&type=video&key=${key}`)
        const data = await response.json()
        // console.log(data.items[1].id.videoId)
        
        const boxes = data.items.map(item=>(
           {
           videoImage: item.snippet.thumbnails.high.url,
           videoTitle: item.snippet.title,
           channelName: item.snippet.channelTitle,
           channelId: item.snippet.channelId,
           videoId: item.id.videoId


        }
       ))

       const channel_Id = data.items.map(item=>(item.snippet.channelId)).join(',')

    //    console.log(channel_Id);

        const channel_url_response = await fetch(`${channel_url}&key=${key}&id=${channel_Id}`)
        const channel_image = await channel_url_response.json()


        // console.log(channel_image.items)

        const channelImage1 = channel_image.items.reduce((acc,item)=>{
           acc[item.id] = item.snippet.thumbnails.high.url
           return acc;
        },{})

        // const channelImage1 = channel_image.items.map(item=>({
        //     channelImage: item.snippet.thumbnails.high.url,

        //     return channelImage;
        //  }))


        const boxesWithImage = boxes.map(box=> ({
            ...box,
            channelImage   : channelImage1[box.channelId]

        }))

        // boxes.set(channelImage1)
       
            
        res.render("index" ,{boxes: boxesWithImage})

        
         
        
        } catch (error) {
            console.log("yt not fetch ",error)
            
        }




})
app.get("/video_play",(req,res)=>{

    const videoId = req.query.videoid;

    console.log(videoId)

   

    res.render("index_video_page",{videoId})
    
    
})

app.post("/register",async (req,res)=>{
    try {
        
        const {fullName,userName,email,password} = req.body;
        
        const Password = await bcrypt.hash(password,10)
        const newEmployee = new User({
            fullName,
            userName,
            email,
            password:Password
        })
        // console.log(req.body.fullName,req.body.userName,req.body.email,password);

        const registered = await newEmployee.save()
        res.status(201).render("index")
        
    } catch (error) {
        res.status(400).render("register").send((error)=>{
            console.log("there is an issue in sending user data to database ",error)
        })
    }
})

app.post("/login",async (req ,res)=> {
    try {
        const {email,password} = req.body;
    
        const verifiedEmail =await User.findOne({
             email:email
        });
        console.log(verifiedEmail)
        
        if(!verifiedEmail){
            console.log("please enter velid email")
        }
        const checkPassword = await bcrypt.compare(password,verifiedEmail.password);
        if (checkPassword) {
            console.log("correct password")
        }else{
            res.status(401).render("login")
            alert("Incorrect Password",2)

        }

        res.status(201).render("index")
 
    } catch (error) {
        res.status(500).render("login")
            console.log("server error while creating user id ",error)
    
    }
})




// app.post("/index", async(req,res)=>{
   

//         const key = process.env.YT_KEY ;
//         const yt_url = process.env.YT_SEARCH_URL;
//         document.getElementById("btn").addeventlisterner("click",yt)
    


//         const yt = async (req,res)=>{try {
//             // const q = "multikiller";
//             const q = document.getElementById("videoTitle").value
//             console.log(q)
        
        
//                  const response = await fetch(`${yt_url}&${q}&type=video&key=${key}`)
//                  const data = await response.json()
        
//                  console.log(data)
                
                
//             } catch (error) {
//                 console.log("yt not fetch ",error)
                
//             }
//         }
        
    
    
    
    
    


// })



app.listen(PORT ||3000 ,()=>{
    console.log(`app is listening at ${PORT||3000 }`)
})
