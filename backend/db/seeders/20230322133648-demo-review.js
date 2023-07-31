"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    options.tableName = "Reviews";
    return queryInterface.bulkInsert(
      options,
      [
        {
          spotId: 1,
          userId: 2,
          review:
            "Location is amazing and place is well equipped. Nicolas was very responsive for the couple of questions we had.",
          stars: 5,
        },
        {
          spotId: 1,
          userId: 3,
          review:
            "We really enjoyed our stay at this unique property. The views were breathtaking, plenty of paths to hike, great place to unwind. The house, though small, has everything you need. It is a very well-organized space, especially in summer when you get to use that awesome terrace with the fireplace. We traveled with little kids, so it did require some extra caution to keep them out of trouble with the steep slopes and stairs. Although they definitely had a lot of fun exploring inside and outside the house.",
          stars: 5,
        },
        {
          spotId: 1,
          userId: 4,
          review:
            "A fantastic experience in this beautiful location! The host was attentive, and the amenities were outstanding. The surrounding nature was incredibly picturesque, and we enjoyed every moment of our stay. Highly recommend!",
          stars: 4,
        },
        {
          spotId: 1,
          userId: 5,
          review:
            "This place is a hidden gem! We loved the serene atmosphere and the stunning views. The cabin had everything we needed for a comfortable stay, and the nearby hiking trails were a bonus. The host was friendly and accommodating. Would definitely visit again!",
          stars: 5,
        },
        // Spot 2 Reviews
        {
          spotId: 2,
          userId: 6,
          review:
            "Our stay at this spot was incredible! The villa was luxurious and well-maintained, offering breathtaking ocean views. The private pool and outdoor dining area were perfect for relaxation. The staff was attentive and made our vacation memorable. Highly recommend!",
          stars: 3,
        },
        {
          spotId: 2,
          userId: 7,
          review:
            "This villa exceeded our expectations! The design and decor were modern and elegant. We enjoyed the beautiful infinity pool and the direct access to the beach. The bedrooms were spacious and comfortable. Overall, a perfect beachfront retreat!",
          stars: 3,
        },
        {
          spotId: 2,
          userId: 8,
          review:
            "We had a wonderful time at this beachfront villa! The location was ideal, and the amenities were top-notch. The staff was attentive and made sure we had everything we needed. The sunsets were unforgettable. Can't wait to come back!",
          stars: 4,
        },
        // Spot 3 Reviews
        {
          spotId: 3,
          userId: 9,
          review:
            "An unforgettable experience in the heart of the forest! The cabin was cozy and well-equipped. We loved the outdoor hot tub and the stunning views of the surrounding nature. The host was friendly and provided helpful tips for exploring the area. Highly recommend for a peaceful getaway!",
          stars: 5,
        },
        {
          spotId: 3,
          userId: 10,
          review:
            "This forest cabin was a perfect escape from the city! The peace and quiet were just what we needed. The cabin was clean, comfortable, and had everything we needed for a relaxing stay. The nearby hiking trails were beautiful. We hope to return soon!",
          stars: 4,
        },
        {
          spotId: 3,
          userId: 9,
          review:
            "We had a fantastic time at this forest retreat! The cabin was charming, and the surroundings were enchanting. We enjoyed the cozy fireplace and the opportunity to reconnect with nature. The host was attentive and made us feel welcome. Highly recommend!",
          stars: 5,
        },
        // Spot 4 Reviews
        {
          spotId: 4,
          userId: 2,
          review:
            "Our stay at this charming cottage was delightful! The location was peaceful and surrounded by nature. The cottage had a rustic charm and all the necessary amenities. We enjoyed exploring the nearby trails and spending evenings by the cozy fireplace. Highly recommended for a serene getaway!",
          stars: 4,
        },
        {
          spotId: 4,
          userId: 3,
          review:
            "This cottage was a perfect escape from the city bustle. The views were incredible, and we loved waking up to the sounds of birds chirping. The host was welcoming and provided great recommendations for local attractions. We had a fantastic time!",
          stars: 5,
        },
        {
          spotId: 4,
          userId: 4,
          review:
            "We had a lovely stay at this cottage. The setting was idyllic, and the cottage itself was cozy and well-maintained. It was a great base for exploring the nearby countryside. We enjoyed every moment of our stay!",
          stars: 4,
        },
        // Spot 5 Reviews
        {
          spotId: 5,
          userId: 5,
          review:
            "Our stay at this mountain cabin was amazing! The location was secluded and provided stunning mountain views. The cabin had a rustic charm and was well-equipped. We enjoyed hiking in the nearby trails and unwinding in the hot tub. Highly recommended for nature lovers!",
          stars: 3,
        },
        {
          spotId: 5,
          userId: 6,
          review:
            "This mountain cabin was a dream come true. The views were breathtaking, and the peaceful surroundings allowed us to relax and rejuvenate. The cabin was clean and comfortable. We loved our stay and hope to return in the future!",
          stars: 3,
        },
        {
          spotId: 5,
          userId: 7,
          review:
            "We had a wonderful time at this cozy mountain retreat. The cabin was charming, and the deck offered stunning panoramic views. The host was friendly and accommodating. We enjoyed exploring the nearby national park and spending evenings by the fire pit. Can't wait to come back!",
          stars: 4,
        },
        {
          spotId: 6,
          userId: 8,
          review:
            "Our stay at this beach house was fantastic! The location was perfect, right on the sandy shores. The house was spacious and beautifully decorated. We enjoyed beach walks and watching stunning sunsets from the balcony. Highly recommended for a relaxing vacation!",
          stars: 5,
        },
        {
          spotId: 6,
          userId: 9,
          review:
            "This beach house was a true gem! We loved waking up to the sound of waves crashing. The house was well-appointed and had all the comforts of home. The beach was just steps away, making it convenient for swimming and sunbathing. A wonderful getaway!",
          stars: 5,
        },
        {
          spotId: 6,
          userId: 2,
          review:
            "We had a memorable time at this beautiful beachfront property. The views were breathtaking, and the house was modern and spacious. We enjoyed barbecues on the deck and bonfires on the beach. The host was accommodating and made sure we had a great stay!",
          stars: 4,
        },

        // // ... Add more reviews for spotIds between 7 and 30

        // // Spot 30 Reviews
        // {
        //   spotId: 30,
        //   userId: 8,
        //   review:
        //     "Our stay at this countryside farmhouse was delightful! The surroundings were picturesque, and the farmhouse had a rustic charm. We loved exploring the nearby vineyards and sampling local wines. The hosts were welcoming and made us feel at home.",
        //   stars: 4,
        // },
        // {
        //   spotId: 30,
        //   userId: 8,
        //   review:
        //     "This countryside farmhouse was the perfect escape from the city. The peaceful atmosphere allowed us to relax and unwind. The farmhouse was well-equipped and had a cozy ambiance. We enjoyed leisurely walks in the nearby fields. A lovely getaway!",
        //   stars: 3,
        // },
        // {
        //   spotId: 30,
        //   userId: 9,
        //   review:
        //     "We had an amazing time at this charming farmhouse. The setting was idyllic, and the farmhouse had all the comforts we needed. We enjoyed our morning coffee on the porch, overlooking the rolling hills. The hosts were gracious and made us feel welcome. Highly recommended for a tranquil retreat!",
        //   stars: 3,
        // },
        {
          spotId: 7,
          userId: 9,
          review:
            "Our stay at this lakeside cabin was a dream come true! The location was serene and offered stunning lake views. The cabin was cozy and well-maintained. We enjoyed fishing, kayaking, and stargazing by the campfire. Highly recommended for nature lovers!",
          stars: 3,
        },
        {
          spotId: 7,
          userId: 2,
          review:
            "This lakeside cabin exceeded our expectations! The surroundings were peaceful, and the cabin was beautifully decorated. We loved spending time by the lake and watching the wildlife. The host was friendly and provided great tips for nearby hiking trails. A perfect retreat!",
          stars: 5,
        },
        {
          spotId: 7,
          userId: 3,
          review:
            "We had a wonderful time at this lakeside getaway. The cabin was comfortable, and the lake was just steps away. We enjoyed paddleboarding and exploring the nearby forest. The host was responsive and made our stay enjoyable. We hope to return in the future!",
          stars: 4,
        },

        // Spot 8 Reviews
        {
          spotId: 8,
          userId: 4,
          review:
            "Our stay at this hilltop villa was absolutely magical! The views of the city and sea were breathtaking. The villa was luxurious and had all the amenities we could ask for. We enjoyed swimming in the infinity pool and dining alfresco on the terrace. Highly recommended for a luxurious retreat!",
          stars: 5,
        },
        {
          spotId: 8,
          userId: 5,
          review:
            "This hilltop villa was a paradise on earth! The design and decor were elegant, and the panoramic views were unforgettable. We spent relaxing days by the pool and enjoyed exploring the nearby coastal towns. The host was attentive and ensured a memorable stay. A truly remarkable experience!",
          stars: 5,
        },
        {
          spotId: 8,
          userId: 6,
          review:
            "We had an amazing time at this stunning hilltop retreat. The villa was spacious and offered complete privacy. We loved the infinity pool and the evening sunsets. The host was welcoming and provided excellent restaurant recommendations. We can't wait to return!",
          stars: 4,
        },

        // Spot 9 Reviews
        {
          spotId: 9,
          userId: 7,
          review:
            "Our stay at this riverside cabin was a peaceful escape. The setting was idyllic, and the cabin had a rustic charm. We enjoyed fishing in the river and roasting marshmallows by the fire pit. The host was accommodating and made us feel welcome.",
          stars: 4,
        },
        {
          spotId: 9,
          userId: 8,
          review:
            "This riverside cabin was the perfect retreat for nature lovers. The cabin was cozy and well-equipped with modern amenities. We enjoyed kayaking in the river and hiking in the nearby forest. The hosts were friendly and provided useful tips for exploring the area.",
          stars: 5,
        },
        {
          spotId: 9,
          userId: 9,
          review:
            "We had a wonderful time at this charming riverside getaway. The cabin was comfortable, and the river views were relaxing. We loved listening to the sounds of nature and watching the birds. The host was attentive and made sure we had a great stay.",
          stars: 5,
        },

        {
          spotId: 10,
          userId: 2,
          review:
            "This historic villa was a hidden gem! The architecture was stunning, and the surrounding countryside was picturesque. We enjoyed wine tastings and exploring nearby villages. The hosts were welcoming and provided excellent hospitality. A must-visit for history and wine enthusiasts!",
          stars: 5,
        },
        {
          spotId: 10,
          userId: 4,
          review:
            "We had a delightful stay at this beautiful villa. The interiors were charming, and the vineyard views were breathtaking. We enjoyed leisurely walks in the gardens and relaxing by the pool. The host was gracious and made us feel at home.",
          stars: 5,
        },
        {
          spotId: 10,
          userId: 7,
          review:
            "Our stay at this historic villa was a dream come true! The vintage decor and antique furnishings added to the charm. We loved exploring the vineyards and savoring local wines. The hosts were friendly and provided valuable insights into the region.",
          stars: 4,
        },

        // Spot 11 Reviews (userIds < 12)
        {
          spotId: 11,
          userId: 6,
          review:
            "We had an amazing time at this modern loft. The location was perfect for exploring the city, and the loft was stylishly designed. We enjoyed dining at nearby restaurants and visiting cultural landmarks. The host was accommodating and made sure we had a comfortable stay.",
          stars: 5,
        },
        {
          spotId: 11,
          userId: 3,
          review:
            "This modern loft was a perfect urban retreat. The industrial-chic design and city views were fantastic. We loved exploring the local art scene and trying out trendy cafes. The host was friendly and provided excellent recommendations for sightseeing.",
          stars: 5,
        },
        {
          spotId: 11,
          userId: 8,
          review:
            'Our stay at this loft was wonderful. The location was central, and the loft had all the amenities we needed. We enjoyed the city"s vibrant nightlife and cultural events. The host was responsive and ensured a smooth check-in process.',
          stars: 4,
        },

        // Spot 12 Reviews (userIds < 12)
        {
          spotId: 12,
          userId: 5,
          review:
            "This cozy cottage was a perfect hideaway! The countryside views were serene, and the cottage was well-furnished. We enjoyed hiking in the nearby trails and roasting marshmallows by the fireplace. The host was friendly and provided useful tips for exploring the area.",
          stars: 5,
        },
        {
          spotId: 12,
          userId: 10,
          review:
            "We had a fantastic time at this countryside cottage. The setting was idyllic, and the cottage had a rustic charm. We loved the peaceful surroundings and the opportunity to relax in nature. The host was accommodating and made us feel welcome.",
          stars: 5,
        },
        {
          spotId: 12,
          userId: 9,
          review:
            "Our stay at this charming cottage was delightful. The location was picturesque, and the cottage was clean and comfortable. We enjoyed birdwatching and exploring the nearby quaint villages. The host was attentive and ensured a pleasant stay.",
          stars: 4,
        },

        // Spot 13 Reviews (userIds < 12)
        {
          spotId: 13,
          userId: 1,
          review:
            "This mountain retreat was a paradise! The views were awe-inspiring, and the cabin was cozy and well-equipped. We enjoyed hiking in the nearby trails and stargazing at night. The host was friendly and provided great tips for exploring the area.",
          stars: 5,
        },
        {
          spotId: 13,
          userId: 11,
          review:
            "We had an incredible time at this secluded mountain cabin. The setting was serene, and the cabin had all the comforts of home. We loved sitting on the porch and enjoying the peacefulness of the mountains. The host was attentive and made us feel at home.",
          stars: 5,
        },
        {
          spotId: 13,
          userId: 6,
          review:
            "Our stay at this mountain cabin was amazing. The location was perfect for nature lovers, and the cabin had a rustic charm. We enjoyed hiking in the nearby national park and spotting wildlife. The host was accommodating and provided valuable recommendations.",
          stars: 4,
        },

        // // Spot 10 Reviews
        // {
        //   spotId: 10,
        //   userId: 10,
        //   review:
        //     "Our stay at this historic villa was extraordinary! The architecture and decor were impressive, and the gardens were stunning. We enjoyed exploring the vineyards and tasting exquisite wines. The host was knowledgeable and shared fascinating stories about the villa's history. Highly recommended for a luxurious experience!",
        //   stars: 3,
        // },
        // {
        //   spotId: 10,
        //   userId: 11,
        //   review:
        //     "This historic villa was a true gem! The interiors were beautifully preserved, and the surroundings were picturesque. We enjoyed leisurely walks in the gardens and relaxing by the pool. The host provided excellent recommendations for local restaurants and attractions.",
        //   stars: 3,
        // },
        // {
        //   spotId: 10,
        //   userId: 12,
        //   review:
        //     "We had an amazing time at this elegant villa. The history and grandeur of the place were captivating. We loved the vineyard views and the authentic Italian experience. The hosts were gracious and made us feel at home. A truly unforgettable stay!",
        //   stars: 4,
        // },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = "Reviews";
    return queryInterface.bulkDelete(options);
  },
};
