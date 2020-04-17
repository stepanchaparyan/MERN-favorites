const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const Profile = require('../models/Profile');

//REQUEST ADD NEW PROFILE
router.post(
  '/add',
  [auth, [check('name', 'Please enter title at least 2 character long').isLength({ min: 2 })]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, surname, email, image, gender, birthDay, phone } = req.body;

    try {
      const newProfile = new Profile({
        user: req.user.id,
        name,
        surname,
        email,
        image,
        gender,
        birthDay,
        phone
      });

      const profile = await newProfile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('server error');
    }
  }
);

// REQUEST FIND PROFILE BY ID
router.get('/:id', auth, async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id);
    if (!profile) return res.status(404).json({ msg: 'Profile not found' });
    res.json(profile);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

//REQUEST FIND PROFILE AND UPDATE
router.put(
  '/update/:id',
  [auth, [check('name', 'Please enter title at least 2 character long').isLength({ min: 2 })]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, surname, email, image, gender, birthDay, phone } = req.body;

    const profileFields = { name, surname, email, image, gender, birthDay, phone };
    try {
      let profile = await Profile.findById(req.params.id);
      if (!profile) return res.status(404).json({ msg: 'Profile not found' });
      profile = await Profile.findByIdAndUpdate(
        req.params.id,
        { $set: profileFields },
        { new: true }
      );
      res.send(profile);
    } catch (err) {
      console.errors(err.message);
      res.status(500).send('Server Error');
    }
  }
);

//REQUEST FIND PROFILE AND DELETE
router.delete('/:id', auth, async (req, res) => {
  try {
    let profile = await Profile.findById(req.params.id);
    if (!profile) return res.status(404).json({ msg: 'Profile not found' });
    await Profile.findByIdAndRemove(req.params.id);
    res.send('Profile Removed successfully');
  } catch (err) {
    console.errors(err.message).json('Server Error');
  }
});

module.exports = router;
