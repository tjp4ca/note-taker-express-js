// install "npm i express"
const express = require('express');

// use localhost 3003
const PORT = process.env.PORT || 3003;

const app = express();

// apiRoutes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// listen for localhost 3003
app.listen(PORT, () => {
    console.log(`server connected to ${PORT}!`);
});
