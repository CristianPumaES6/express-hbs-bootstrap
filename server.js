const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public')); // carpetas publicas

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales'); // como utilizar los partials
app.set('view engine', 'hbs');//inicializar hbs




app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Cristian A. Puma Villalva'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});