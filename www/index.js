// const express = require('express')
// const app = express()
const app = require('express')();
const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended:true }))
app.use(bodyParser.json({
    type: 'application/json'
}))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
})
app.get('/signin', (req, res) => {
    let name = "Teo";
    let age = "<h3>11</h3>";
    let arr = [11,12,13,14];
    res.render('signin', { name: name, txtAge: age , arr});
})
app.post('/login', (req, res) => {
    console.log(req.body)
    // const email = req.body.email;
    // const password = req.body.password;
    const { email, password }  = req.body;
    res.setHeader('token', '1234567');
    res.send({ name: 'name', email, password });
});

app.listen(3000, () => console.log('Server started on port 3000!'))