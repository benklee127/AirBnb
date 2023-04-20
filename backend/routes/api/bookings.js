const express = require('express');
const router = express.Router();
const { Op } = require("sequelize");
const { requireAuth } = require('../../utils/auth')
const { Spot, Review, SpotImage, User, ReviewImage, Booking } = require('../../db/models');

//current user bookings
router.get('/current', requireAuth, async (req, res) => {
    const userId = req.user.id;
    const bookings = await Booking.findAll({
        where: {
            userId,
        },
        include: {
            model: Spot,
            attributes: ['id', 'ownerId', 'address', 'city', 'state', 'country', 'lat', 'lng', 'name', 'price']
        },
    });

    const bookingList = [];
    bookings.forEach(booking => {
        bookingList.push(booking.toJSON());
    });

    res.json({ Bookings: bookingList });
});


//edit booking
router.put('/:bookingId', requireAuth, async (req, res) => {
//    const userId = req.user.id;
    const bookingId = req.params.bookingId;
    const { startDate, endDate } = req.body;

    const booking = await Booking.findByPk(bookingId);
    if (!booking) {
        res.status(404).json({
            "message": "Booking couldn't be found",
            "statusCode": 404
        })
    }

    const start = new Date(startDate).getTime();
    const end = new Date(endDate).getTime();
    const now = new Date().getTime();


    if (start >= end) {
        res.status(403).json({
            "message": "Validation error",
            "statusCode": 400,
            "errors": [
                "endDate cannot come before startDate"
            ]
        })
    }


    if (now >= start) {
        res.status(403).json({
            "message": "Past bookings can't be modified",
            "statusCode": 403
        })
    }

    booking.startDate = startDate;
    booking.endDate = endDate;

});

//delete booking
router.delete('/:bookingId', requireAuth, async (req, res) => {
//    const userId = req.user.id;
    const bookingId = req.params.bookingId;
    const booking = await Booking.findByPk(bookingId, {
        include: { model: Spot }
    });

    if (!booking) {
        res.status(404).json({
            "message": "Booking couldn't be found",
            "statusCode": 404
        })
    }

    const bookingJSON = booking.toJSON();

    const start = new Date(bookingJSON.startDate).getTime();
    const now = new Date().getTime();

    if (now >= start) {
        res.status(403).json({
            "message": "Bookings that have been started can't be deleted",
            "statusCode": 403
        })
    };

    await booking.destroy();

    res.json({
        "message": "Successfully deleted",
        "statusCode": 200
    })


})

//test router setup
router.get('/test', function (req, res) {
    res.send('endpoint hit');
});

module.exports = router;
