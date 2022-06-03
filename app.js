const express = require('express');
const morgan = require('morgan')

// Setup Express app
const app = express();

// Register view engine
app.set('view engine', 'ejs')

// listen for requests
app.listen(3000);

app.use(express.static('public'));
app.use(morgan('dev'))

app.use((req,res,next) => {
    console.log('Next middleware')
    next();
})

app.get('/', (req, res) => {
    // res.send('<p>Home Page</p>');
    // res.sendFile('./views/index.html', {root: __dirname});
    const blogs = [
        {title: 'Uzi finds egg', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Ali finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Usama finds egg', snippet: 'Lorem ipsum dolor sit amet consectetur'}
    ];
    res.render('index', {title: 'Home', blogs});
});

app.get('/about', (req, res) => {
    // res.send('<p>About Page</p>');
    // res.sendFile('./views/about.html', {root: __dirname});
    res.render('about', {title: 'About'});
});

app.get('/blogs/create', (req,res) => {
    res.render('create', {title: 'Create a new blog'})
})


// 404 Page
app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', {root: __dirname});
    res.status(404).render('404', {title: '404'});
})