const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');
// Express HBS engine
app.set('view engine', 'hbs');

app.get('/', (request, response) => {
    response.render('home', {
        name: 'jesús martínez'
    });
});

app.get('/about', (request, response) => {
    response.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});