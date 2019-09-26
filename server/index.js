var nr = require('newrelic');
const express = require('express')
const app = express()
const port = 3003

const bodyParser = require('body-parser');
const path = require('path');
const router = require('./router.js');
const morgan = require('morgan')

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/api', router);

app.use('/loaderio-19124ec1947260c0425c284ff45d3955/', (req, res)=> {
	res.send('loaderio-19124ec1947260c0425c284ff45d3955/');
});

app.listen(port, () => console.log(`Listening on port ${port}!`))
