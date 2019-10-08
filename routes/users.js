const express = require('express');
const router = express.Router();
const User = require('../models/User');
const mongoose = require('mongoose');

router.post('/seed-users', async (req, res, next) => {
  try {
    await User.deleteMany()
    const newUsers = await User.insertMany(req.body)
    res.send(newUsers)
    console.log(await User.find())
  } catch (err) {
    res.status(500).send(err)
    console.log(err)
  }
})

module.exports = router