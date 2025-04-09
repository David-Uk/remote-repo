const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

const { PORT } = process.env;

app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
})

app.listen(PORT || 5000, () => {
    console.log(`Server is running on port ${PORT || 3000}`);
})