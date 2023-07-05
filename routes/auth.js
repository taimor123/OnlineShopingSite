const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.send('exist');
    } else {
      const newUser = new User({ email, password });
      await newUser.save();
      return res.send('notexist');
    }
  } catch (error) {
    console.error('Error occurred while signing up:', error);
    return res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
