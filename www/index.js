// const express = require('express')
// const app = express()
const app = require('express')();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended:true }))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
})
app.get('/signin', (req, res) => {
    res.render('signin');
})
app.post('/login', (req, res) => {
    console.log(req.body)
    // const email = req.body.email;
    // const password = req.body.password;
    const { email, password }  = req.body;
    res.send({ email, password });
});

app.listen(3000, () => console.log('Server started on port 3000!'))