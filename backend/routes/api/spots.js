const express = require('express');
const router = express.Router();
const { Op } = require("sequelize");
const { Spot, Review, SpotImage, User, ReviewImage, Booking } = require('../../db/models');

//test router setup
router.post('/test', function (req, res) {
    res.json({ requestBody: req.body });
});

module.exports = router;
