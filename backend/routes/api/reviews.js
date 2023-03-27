const express = require('express');
const router = express.Router();

const { Op } = require("sequelize");
const { Spot, Review, SpotImage, User, ReviewImage, Booking } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


//get all reviews of user

router.get('/current', requireAuth, async (req, res) => {
    const reviews = await Review.findAll({
        where: {
            userId: req.user.id
        },
        include: [
            {
                model: User,
                attributes: ['id', 'firstName', 'lastName']
            },
            {
                model: Spot,
                attributes: ['id', 'ownerId', 'address', 'city', 'state', 'country', 'lat', 'lng', 'name', 'price']
            },
            {
                model: ReviewImage,
                attributes: ['id', 'url']
            }
        ]
    });

    const reviewList = [];

    reviews.forEach(review => {
        reviewList.push(review.toJSON())
    });


    res.json({ Reviews: reviewList });


})

//test router setup
router.get('/test', function (req, res) {
    res.send('endpoint hit');
});

//

module.exports = router;
