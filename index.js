const express = require('express');
const app = express();
require('./models/dbConfig');
const postsControllers = require('./controllers/postsController');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use('/posts', postsControllers);

app.listen(5500, () => console.log('Server started: 5500'));