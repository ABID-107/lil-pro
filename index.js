const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    fs.readdir('./files', (err, files) => {
        res.render('index', { files: files });
    });
});
app.get('/readMore', (req, res) => {
    res.send(req.body);
});
app.get('/delete/:filename', (req, res) => {
    fs.unlink(`./files/${req.params.filename}`, (err) => {
        res.redirect('/');
    });
});
app.post('/create', (req, res) => {
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.description,(err) => {res.redirect('/')});
});


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});