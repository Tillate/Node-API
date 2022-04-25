const express = require('express');
const app = express();
require('./models/dbConfig');
const postsControllers = require('./controllers/postsController');

app.use('/', postsControllers);

app.listen(5500, () => console.log('Server started: 5500'));