const express = require('express');
const path = require('path');
require('dotenv').config();
const mongoose = require('mongoose')

const { PORT, DATABASE } = process.env;

const app = express();

mongoose.connect(DATABASE)
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((err) => {
        console.log('MongoDB connection error:', err);
    });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');


app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
})

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact' });
})

app.listen(PORT || 5000, () => {
    console.log(`Server is running on port ${PORT || 5000}`);
})