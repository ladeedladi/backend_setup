const express=require('express')
const path=require('path')
const router=express.Router();
const rootDir=require('../util/path')

router.use('/contactUs',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','form.html'))
    })
    router.use('/success',(req,res,next)=>{
        res.send('<h1>success</h1>')
        })
module.exports=router;