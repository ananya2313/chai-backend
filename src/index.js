// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"


// import mongoose, { connect } from "mongoose";
// import {DB_NAME} from "./constants";

import connectDB from "./db/index.js";


//APPROACH 2
dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at port: ${process.env.PORT}`);
    })
})
.catch((err=>{
    console.log("Mongo DB connection failed!!!",err)
}))





 





/*



//APPROACH 1:-



import express from "express";
const app=express()


// function connectDB(){}


// connectDB()

(async() =>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERRR: ",error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port${process.env.PORT}`)
        })
    }
    catch(error){
        console.error("ERROR: ",error)  //console.log bhi kr skte h
        throw err
    }
})()

*/
