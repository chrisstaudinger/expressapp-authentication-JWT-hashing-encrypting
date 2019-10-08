const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const morgan = require('morgan')
const nodemon = require('nodemon')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const {db, dbOptions, dbConnection} = require('./utils/database-utils.js')

// Models
const User = require('./models/User')

const app = express()
const PORT = process.env.PORT || 5000

app.use(morgan('tiny'))
app.use(express.json())

mongoose.connect(db, dbOptions, dbConnection)

//Import Routes
const userRoutes = require('./routes/users')

app.use('/users', userRoutes)

app.listen(PORT, () => console.log(`listening on port ${PORT}`))