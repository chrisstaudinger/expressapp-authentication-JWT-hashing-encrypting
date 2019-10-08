const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const morgan = require('morgan')
const nodemon = require('nodemon')
const {db, dbOptions, dbConnection} = require('./utils/database-utils.js')

const app = express()
const PORT = process.env.PORT || 5000

mongoose.connect(db, dbOptions, dbConnection);

app.use(morgan('tiny'))