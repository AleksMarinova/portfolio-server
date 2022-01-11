const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config({path:"./.env"});
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
const dbURI = process.env.DB_URL;
const Project = require('./Project');

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server started on port ${PORT} and connected to Atlas`)))
.catch(err => console.log(err));

app.get('/', async (req, res) => {
    const projects = await Project.find();
    res.json(projects);
});

process.on('SIGINT', () => {
    mongoose.disconnect();
    console.log('\nMongoose disconnected');
    process.exit();
});