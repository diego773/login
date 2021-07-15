const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesUrls = require('./routes/routes');
const cors = require('cors');

require('dotenv').config()

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database connected"));

app.use(express.json());
app.use(cors());
app.use('/app', routesUrls);
const PORT = process.env.PORT || 3001;

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
