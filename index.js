const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config');
const { getAll, getById, create, updateById, deleteById } = require('./controllers/blog');

const app = express();
const PORT = 3000;
app.use(bodyParser.json());

const db = config.mongoURL;
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }).then((res) => console.log('Connected to DB')).catch((error) => console.log(error));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Routes
app.post('/blogs', create);
app.get('/blogs', getAll);
app.get('/blogs/:id', getById);
app.put('/blogs/:id', updateById);
app.delete('/blogs/:id', deleteById);
