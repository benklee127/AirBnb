const express = require('express');
const { Op } = require("sequelize");

const { Spot, Review, SpotImage, User, ReviewImage, Booking } = require('../../db/models');

const { requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();



//get all spots
router.get('/', async (req, res) => {
    let where = {}
    const spots = await Spot.findAll({
        where,
        include: [
            { model: SpotImage },
            { model: Review }
        ],
    });
    const spotList = [];

    spots.forEach(spot => {
        spotList.push(spot.toJSON());
    });

    spotList.forEach(spot => {
        //need to add img url

        let count = 0;
        let sum = 0;
        spot.Reviews.forEach(review => {
            count++;
            sum += review.stars;
        })
        const avg = sum / count;

        spot.avgRating = avg;

    })
    res.json(spotList)
});

//get all current user's spots
router.get('/current', requireAuth, async (req, res) => {

});

router.post('/', requireAuth, async (req, res) => {
    const { address, city, state, country, lat, lng, name, description, price } = req.body
    const spot = await Spot.create({
        ownerId: req.user.id,
        address,
        city,
        state,
        country,
        lat,
        lng,
        name,
        description,
        price
    })
    res.json(spot);
})

//test router setup
router.get('/test', function (req, res) {
    res.send('endpoint hit');
});

module.exports = router;
