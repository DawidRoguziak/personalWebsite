require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const  app = express();

app.use(cors());
app.use(bodyParser.json());


const port = 8001;
const emailService = require('./api/EmailService');

app.use('/api/email', emailService);
app.use(express.static(__dirname + '/public/'))
app.get(/.*/, (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
});

app.listen(port, () => console.log(`port ${port}`))