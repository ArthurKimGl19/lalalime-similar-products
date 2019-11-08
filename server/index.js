var nr = require('newrelic');
const express = require('express')
const app = express()
const port = 3003

const bodyParser = require('body-parser');
const path = require('path');
const router = require('./router.js');
//const morgan = require('morgan')
//app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/api', router);

app.use('loaderio-c55906015f51b267d66dd987bdab08fa/', (req, res)=> {
	res.send('loaderio-c55906015f51b267d66dd987bdab08fa/');
});

app.listen(port, () => console.log(`Listening on port ${port}!`))
