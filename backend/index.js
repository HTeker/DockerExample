'use strict';

let express = require('express'),
    app = express();

// Constants
const PORT = process.env.PORT || 8080;

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// App
app.get('/', (req, res) => {

    console.log(`GET/ Requested on ${(new Date).toLocaleTimeString()}`);

    let data = [
        { firstName: 'Carita', lastName: 'Dacre', email: 'cdacre0@zimbio.com'},
        { firstName: 'Helaine', lastName: 'Staden', email: 'hstaden1@msn.com'},
        { firstName: 'Barth', lastName: 'Cellone', email: 'bcellone2@hp.com'},
        { firstName: 'Oliy', lastName: 'Blewitt', email: 'oblewitt3@mashable.com'},
        { firstName: 'Nanete', lastName: 'Dillingstone', email: 'ndillingstone4@cbsnews.com'}
    ];

    res.status(200).json(data);

});

app.listen(PORT, function(){
    console.log(`Running API on port: ${PORT}`);
});