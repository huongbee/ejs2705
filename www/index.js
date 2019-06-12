// const express = require('express')
// const app = express()
const app = require('express')();
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('home');
})
app.get('/signin',(req,res)=>{
  res.render('signin');
})
// app.post('');

app.listen(3000, ()=>console.log('Server started on port 3000!'))