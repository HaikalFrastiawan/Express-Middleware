const express = require('express');
const app = express();
morgan = require('morgan');


// app.use(morgan('dev'));

app.use((req, res, next) => {
    console.log(req.timeRequest = new Date());
    console.log(`${req.method} ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});




app.get('/Halaman', (req, res) => {
    res.send('Halaman Page');
} );


app.use((req, res, ) => {
    res.status(404).send('Halaman Tidak Ditemukan');

}   );


app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});



module.exports = app;   
