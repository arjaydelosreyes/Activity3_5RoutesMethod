const express = require('express');
const router = express.Router();
const aje = require('../controller/ajeController');


router.get('/', aje.index);
router.get('/aboutUs', aje.about);
router.get('/dashboard', aje.dashboard);
router.get('/profile', aje.profile);
router.get('/login', aje.login);

module.exports = router;