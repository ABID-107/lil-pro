const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));



app.get('/', (req, res) => {
    res.render('index');
});

app.get('/profile/:username', (req, res) => {
    res.send(`welcome ${req.params.username}`);
});
app.get('/profile/:username/:age', (req, res) => {
    res.send(`welcome ${req.params.username} now you are ${req.params.age} years old`);
});


app.listen(3000, () => {
    console.log('server is running on port 3000');
});