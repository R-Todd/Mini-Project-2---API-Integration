// app.js

const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// EJS view setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//  serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    // HOME route - render index.ejs
    res.render('index');
});

app.listen(PORT, () => {
    console.log('Server running at http://localhost:3000');
});



