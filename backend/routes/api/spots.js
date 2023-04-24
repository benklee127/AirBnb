const express = require('express');
const { Op } = require("sequelize");

const { Spot, Review, SpotImage, User, ReviewImage, Booking } = require('../../db/models');

const { requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validateSpot = [
    check('address')
        .exists({ checkFalsy: true })
        .withMessage('Street address is required'),
    check('city')
        .exists({ checkFalsy: true })
        .withMessage('City is required'),
    check('state')
        .exists({ checkFalsy: true })
        .withMessage('State is required'),
    check('country')
        .exists({ checkFalsy: true })
        .withMessage("Country is required"),
    check('lat')
        .exists({ checkFalsy: true })
        .isDecimal()
        .withMessage("Latitude is not valid"),
    check('lng')
        .exists({ checkFalsy: true })
        .isDecimal()
        .withMessage("Longitude is not valid"),
    check('name')
        .exists({ checkFalsy: true })
        .isLength({ max: 49 })
        .withMessage("Name must be less than 50 characters"),
    check('description')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage("Description is required"),
    check('price')
        .exists({ checkFalsy: true })
        .isNumeric()
        .withMessage("Price per day is required"),
    handleValidationErrors
];


//get all spots
router.get('/', async (req, res) => {
    //query validation
    let { size, page, minLat, maxLat, minLng, maxLng, minPrice, maxPrice } = req.query;
    page = parseInt(page);
    size = parseInt(size);

    if (page < 1) {
        res.status(400).json({
            "message": "Validation Error",
            "statusCode": 400,
            "errors": {
                "page": "Page must be greater than or equal to 1"
            }
        });
    }
    if (size < 1) {
        res.status(400).json({
            "message": "Validation Error",
            "statusCode": 400,
            "errors": {
                "page": "Size must be greater than or equal to 1"
            }
        });
    }
    if (isNaN(Number(maxLat))) {
        res.status(400).json({
            "message": "Validation Error",
            "statusCode": 400,
            "errors": {
                "page": "Maximum latitude is invalid"
            }
        });
    }
    if (isNaN(Number(minLat))) {
        res.status(400).json({
            "message": "Validation Error",
            "statusCode": 400,
            "errors": {
                "page": "Minimum latitude is invalid"
            }
        });
    }
    if (isNaN(Number(maxLng))) {
        res.status(400).json({
            "message": "Validation Error",
            "statusCode": 400,
            "errors": {
                "page": "Maximum longitude is invalid"
            }
        });
    }
    if (isNaN(Number(minLng))) {
        res.status(400).json({
            "message": "Validation Error",
            "statusCode": 400,
            "errors": {
                "page": "Minimum longitude is invalid"
            }
        });
    }

    if (minPrice < 0) {
        res.status(400).json({
            "message": "Validation Error",
            "statusCode": 400,
            "errors": {
                "page": "Minimum price must be greater than or equal to 0"
            }
        });
    }

    if (maxPrice < 0) {
        res.status(400).json({
            "message": "Validation Error",
            "statusCode": 400,
            "errors": {
                "page": "Maximum price must be greater than or equal to 0"
            }
        });
    }

    //query filter & pagination

    if (isNaN(page)) page = 0;
    if (isNaN(size)) size = 20;




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

    //avg rating for spot
    spotList.forEach(spot => {
        //need to add img url

        let count = 0;
        let sum = 0;
        spot.Reviews.forEach(review => {
            count++;
            sum += review.stars;
        });

        spot.avgRating = sum / count;

    })
    res.json(spotList)
});

//get all current user's spots
router.get('/current', requireAuth, async (req, res) => {
    const spots = await Spot.findAll({
        where: {
            ownerId: req.user.id
        },
        include: [
            { model: SpotImage },
            { model: Review }
        ]
    });

    let spotsList = [];
    spots.forEach(spot => {
        spotsList.push(spot.toJSON());
    });

    // spotsList.forEach(spot => {

    // })

    //calc avg rating given
    spotsList.forEach(spot => {
        let count = 0;
        let sum = 0;
        spot.Reviews.forEach(review => {
            count++;
            sum += review.stars;
        })

        spot.avgRating = sum / count;

    })
    res.json({ Spots: spotsList })

});

router.get('/:spotid', async (req, res) => {
    const spot = await Spot.findByPk(req.params.spotid, {
        include: [
            {
                model: SpotImage,
                attributes: ['id', 'url', 'preview'],
            },
            {
                model: User,
                as: 'Owner',
                attributes: ['id', 'firstName', 'lastName'],
            },
            {
                model: Review
            }
        ]
    });

    if (!spot) {
        res.status(404).json({ message: 'Spot couldn\'t be found' })
    }

    const spotJSON = spot.toJSON();
    spotJSON.numReviews = spotJSON.Reviews.length;

    let sum = 0;
    let count = 0;
    spotJSON.Reviews.forEach(review => {
        count++;
        sum += review.stars;
    })
    spotJSON.avgStarRating = sum / count;

    res.json(spotJSON);

});

router.post('/', requireAuth, validateSpot, async (req, res) => {
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
});

router.post('/:spotId/images', requireAuth, async (req, res, next) => {
    const spotId = req.params;
    const { url, preview } = req.body;

    const spot = await Spot.findByPk(spotId);

    if (!spot) {
        res.status(404).json({ "message": "Spot couldn't be found" });
    }

    const img = await SpotImage.create({ spotId, url, preview });
    const imgJSON = img.toJSON();
    res.json(imgJSON);

});

router.put('/:spotId', requireAuth, validateSpot, async (req, res, next) => {
    const { address, city, state, country, lat, lng, name, description, price } = req.body;

    const spot = await Spot.findByPk(req.params.spotId);

    if (!spot) {
        res.status(404).json({ message: "Spot couldn't be found" });
    }

    spot.address = address;
    spot.city = city;
    spot.state = state;
    spot.country = country;
    spot.lat = lat;
    spot.lng = lng;
    spot.name = name;
    spot.description = description;
    spot.price = price;

    await spot.save();

    res.json(spotJSON);
});

//delete spot
router.delete('/:spotId', requireAuth, async (req, res, next) => {
    const spotId = req.params.spotId;
    const spot = await Spot.findByPk(spotId);

    if (!spot) {
        res.status(404).json({
            "message": "Spot couldn't be found",
            "statusCode": 404
        });
    }

    await spot.destroy();
    res.status(200).json({
        "message": "Successfully deleted",
        "statusCode": 200
    });
})


//test router setup
router.get('/test', function (req, res) {
    res.send('endpoint hit');
});

module.exports = router;
