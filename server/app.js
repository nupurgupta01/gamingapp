const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')
const passport=require('passport')
const jwt =require('jsonwebtoken')
//const routeauth = require('./routes/authRoutes.js')


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Gameapp', { useNewUrlParser: true }, () => {
    console.log('connected to mongodb')
})
const passportSetup = require('./config/passport-setup')

app.use(express.static(path.join(__dirname,'../dist')))
app.use(passport.initialize());
//app.use('/auth', routeauth);
app.get('/',(req,res)=>{
    // fs.readFile(path.join(__dirname+'../dist/index.html'),(data,err)=>{
    //     if(err) res.send('error')
    //     res.send
    // })
    res.sendFile(path.join(__dirname + '../dist/index.html'))
})
app.get('/auth/home', function (req, res) {
    
    res.send('Welcome to Noteapp')
});
app.get('/auth/login',function(req,res){
    res.send('logging with')
})
app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile']
}))
app.get('/auth/google/redirect', passport.authenticate('google'), (req, res) => {
    
    res.send('u r in account')
})
app.listen(3000,()=>console.info('server listening in 3000'))
