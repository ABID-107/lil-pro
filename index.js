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
        if (err) {
            return res.render('index', { files: [] });
        }
        res.render('index', { files: files });
    });
});


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});