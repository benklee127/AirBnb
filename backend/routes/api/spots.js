const express = require('express');
const router = express.Router();
const { Op } = require("sequelize");
const { Spot, Review, SpotImage, User, ReviewImage, Booking } = require('../../db/models');

//test router setup
router.get('/test', function (req, res) {
    res.send('endpoint hit');
});

module.exports = router;
