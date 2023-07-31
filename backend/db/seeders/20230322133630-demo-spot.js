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
    options.tableName = "Spots";
    return queryInterface.bulkInsert(
      options,
      [
        {
          ownerId: 1,
          address: "123 Cozy Cabin Lane",
          city: "Aspen",
          state: "Colorado",
          country: "USA",
          lat: 39.18,
          lng: -106.82,
          name: "Tranquil Mountain Retreat",
          description:
            "Escape the hustle and bustle of city life in this charming cabin tucked away in the scenic mountains of Aspen. Cozy up by the fireplace, hike through picturesque trails, and enjoy the serenity of nature at its finest.",
          price: 120.75,
        },
        {
          ownerId: 1,
          address: "456 Beachfront Road",
          city: "Sydney",
          state: "NSW",
          country: "Australia",
          lat: -33.86,
          lng: 151.21,
          name: "Oceanview Villa",
          description:
            "The MICA, high-end micro-hosting located in the heart of the boreal forest. Live the immersive experience of nature just 25 minutes from Old Quebec. Enjoy panoramic views of Laurentian Park and breathtaking sunsets at the highest peak of Beauport Lake.",
          price: 180.5,
        },
        {
          ownerId: 3,
          address: "789 Rustic Farmhouse Lane",
          city: "Tuscany",
          state: "Tuscany",
          country: "Italy",
          lat: 43.77,
          lng: 11.25,
          name: "Idyllic Tuscan Farmhouse",
          description:
            "Indulge in the beauty of the Italian countryside in this idyllic farmhouse located in the heart of Tuscany. Experience the charm of olive groves, vineyards, and rolling hills, and savor authentic Italian cuisine in nearby quaint villages.",
          price: 220.0,
        },
        {
          ownerId: 4,
          address: "101 Palm Paradise",
          city: "Maui",
          state: "Hawaii",
          country: "USA",
          lat: 20.79,
          lng: -156.33,
          name: "Beachfront Paradise Villa",
          description:
            "Discover the ultimate beachfront paradise in Maui. Unwind on golden sands, swim with turtles in crystal-clear waters, and enjoy breathtaking sunrises and sunsets from your private terrace.",
          price: 280.25,
        },
        {
          ownerId: 5,
          address: "555 Redwood Retreat",
          city: "San Francisco",
          state: "California",
          country: "USA",
          lat: 37.77,
          lng: -122.43,
          name: "Modern City Loft",
          description:
            "Immerse yourself in the vibrant city life of San Francisco in this modern loft nestled among the iconic redwood trees. Explore the eclectic neighborhoods, visit world-class museums, and sample delicious gourmet food.",
          price: 200.0,
        },
        {
          ownerId: 6,
          address: "222 Desert Oasis",
          city: "Dubai",
          state: "Dubai",
          country: "UAE",
          lat: 25.2,
          lng: 55.27,
          name: "Luxury Desert Villa",
          description:
            "Experience luxury in the middle of the desert at this stunning villa in Dubai. Enjoy the privacy of your own pool, marvel at the architectural wonders of the city, and embark on thrilling desert safaris.",
          price: 350.0,
        },
        {
          ownerId: 7,
          address: "777 Alpine Chalet",
          city: "Zermatt",
          state: "Valais",
          country: "Switzerland",
          lat: 46.02,
          lng: 7.75,
          name: "Ski-In/Ski-Out Chalet",
          description:
            "Hit the slopes from the doorstep of this cozy alpine chalet in Zermatt. Enjoy breathtaking views of the Matterhorn, indulge in Swiss chocolate and fondue, and experience the magic of a winter wonderland.",
          price: 300.0,
        },
        {
          ownerId: 8,
          address: "333 Lakeside Haven",
          city: "Queenstown",
          state: "Otago",
          country: "New Zealand",
          lat: -45.03,
          lng: 168.66,
          name: "Scenic Lakeview Cottage",
          description:
            "Immerse yourself in the natural beauty of Queenstown in this charming cottage overlooking the serene lake. Explore thrilling outdoor adventures, bask in the tranquility of nature, and be mesmerized by the Southern Alps.",
          price: 190.5,
        },
        {
          ownerId: 9,
          address: "456 Sakura Street",
          city: "Kyoto",
          state: "Kyoto Prefecture",
          country: "Japan",
          lat: 35.01,
          lng: 135.76,
          name: "Traditional Ryokan Experience",
          description:
            "Step back in time and experience traditional Japanese hospitality at this authentic ryokan in Kyoto. Relax in onsen baths, witness the beauty of cherry blossoms, and savor the art of kaiseki cuisine.",
          price: 180.0,
        },
        {
          ownerId: 10,
          address: "101 Lighthouse View",
          city: "Cape Town",
          state: "Western Cape",
          country: "South Africa",
          lat: -33.92,
          lng: 18.42,
          name: "Seaside Lighthouse Retreat",
          description:
            "Embrace the coastal charm of Cape Town in this lighthouse retreat with stunning views of the Atlantic Ocean. Explore Table Mountain, enjoy world-class wines in the nearby Winelands, and spot penguins at Boulders Beach.",
          price: 280.0,
        },
        {
          ownerId: 11,
          address: "888 Red Rock Ranch",
          city: "Sedona",
          state: "Arizona",
          country: "USA",
          lat: 34.87,
          lng: -111.76,
          name: "Zen Desert Hideaway",
          description:
            "Find serenity in the spiritual energy of Sedona at this peaceful desert hideaway. Immerse yourself in stunning red rock landscapes, explore mystical vortexes, and experience transformative wellness retreats.",
          price: 150.0,
        },
        {
          ownerId: 12,
          address: "222 Rainforest Cottage",
          city: "Rio de Janeiro",
          state: "Rio de Janeiro",
          country: "Brazil",
          lat: -22.91,
          lng: -43.17,
          name: "Enchanting Jungle Getaway",
          description:
            "Escape to an enchanting rainforest cottage in Rio de Janeiro. Immerse yourself in the lush greenery, explore iconic landmarks like Christ the Redeemer, and experience the vibrant culture of Brazil.",
          price: 210.0,
        },
        {
          ownerId: 13,
          address: "777 Cherry Blossom Lane",
          city: "Tokyo",
          state: "Tokyo",
          country: "Japan",
          lat: 35.68,
          lng: 139.76,
          name: "Modern Tokyo Apartment",
          description:
            "Immerse yourself in the futuristic cityscape of Tokyo in this stylish modern apartment. Discover cutting-edge technology, indulge in world-class sushi, and witness the magic of cherry blossoms in spring.",
          price: 230.5,
        },
        {
          ownerId: 14,
          address: "333 Amalfi Coast",
          city: "Amalfi",
          state: "Campania",
          country: "Italy",
          lat: 40.63,
          lng: 14.6,
          name: "Seaside Amalfi Villa",
          description:
            "Experience la dolce vita in this stunning villa perched on the cliffs of the Amalfi Coast. Enjoy breathtaking views of the Mediterranean Sea, explore charming coastal towns, and indulge in delectable Italian cuisine.",
          price: 320.0,
        },
        // {
        //   ownerId: 16,
        //   address: "101 Redwood Retreat",
        //   city: "Yosemite",
        //   state: "California",
        //   country: "USA",
        //   lat: 37.85,
        //   lng: -119.54,
        //   name: "Secluded Forest Cabin",
        //   description:
        //     "Find solitude and tranquility in this secluded forest cabin near Yosemite National Park. Immerse yourself in the beauty of giant sequoias, hike to breathtaking waterfalls, and stargaze under clear night skies.",
        //   price: 140.0,
        // },
        // {
        //   ownerId: 17,
        //   address: "888 Alpine Lodge",
        //   city: "St. Moritz",
        //   state: "Grisons",
        //   country: "Switzerland",
        //   lat: 46.5,
        //   lng: 9.84,
        //   name: "Mountain Chalet Retreat",
        //   description:
        //     "Experience alpine luxury at its finest in this elegant mountain chalet in St. Moritz. Ski down pristine slopes, soak in thermal baths, and indulge in Swiss hospitality.",
        //   price: 380.0,
        // },
        // {
        //   ownerId: 18,
        //   address: "222 Blue Lagoon",
        //   city: "Reykjavik",
        //   state: "Capital Region",
        //   country: "Iceland",
        //   lat: 64.15,
        //   lng: -21.95,
        //   name: "Geothermal Retreat",
        //   description:
        //     "Immerse yourself in the otherworldly beauty of Iceland in this geothermal retreat near the Blue Lagoon. Witness the Northern Lights, explore volcanic landscapes, and relax in natural hot springs.",
        //   price: 260.0,
        // },
        // {
        //   ownerId: 19,
        //   address: "777 Zen Garden",
        //   city: "Kyoto",
        //   state: "Kyoto Prefecture",
        //   country: "Japan",
        //   lat: 35.01,
        //   lng: 135.76,
        //   name: "Tranquil Temple Stay",
        //   description:
        //     "Experience the serenity of a Zen garden in this traditional temple stay in Kyoto. Meditate in peaceful surroundings, participate in ancient rituals, and savor authentic vegetarian cuisine.",
        //   price: 200.0,
        // },
        // {
        //   ownerId: 20,
        //   address: "333 Beach Bliss",
        //   city: "Bora Bora",
        //   state: "Society Islands",
        //   country: "French Polynesia",
        //   lat: -16.5,
        //   lng: -151.75,
        //   name: "Overwater Bungalow",
        //   description:
        //     "Discover paradise on Earth in this luxurious overwater bungalow in Bora Bora. Dive into crystal-clear waters, relax on your private deck, and experience the magic of the South Pacific.",
        //   price: 500.0,
        // },
        // {
        //   ownerId: 21,
        //   address: "456 Safari Lodge",
        //   city: "Maasai Mara",
        //   state: "Narok",
        //   country: "Kenya",
        //   lat: -1.5,
        //   lng: 35.2,
        //   name: "Safari Adventure Camp",
        //   description:
        //     "Embark on an unforgettable safari adventure in Maasai Mara at this exclusive lodge. Witness the Great Migration, spot the Big Five, and experience the rich cultural heritage of the Maasai people.",
        //   price: 350.0,
        // },
        // {
        //   ownerId: 22,
        //   address: "101 Santorini Cliff",
        //   city: "Santorini",
        //   state: "South Aegean",
        //   country: "Greece",
        //   lat: 36.41,
        //   lng: 25.43,
        //   name: "Caldera View Villa",
        //   description:
        //     "Indulge in the breathtaking beauty of Santorini in this cliffside villa with panoramic views of the Caldera. Watch stunning sunsets, explore charming villages, and savor delectable Greek cuisine.",
        //   price: 280.0,
        // },
        // {
        //   ownerId: 23,
        //   address: "888 Rainforest Retreat",
        //   city: "Manaus",
        //   state: "Amazonas",
        //   country: "Brazil",
        //   lat: -3.12,
        //   lng: -60.02,
        //   name: "Eco-Lodge in the Jungle",
        //   description:
        //     "Immerse yourself in the Amazon rainforest at this eco-lodge in Manaus. Explore diverse wildlife, cruise along the Amazon River, and experience the magic of the world's largest tropical rainforest.",
        //   price: 220.0,
        // },
        // {
        //   ownerId: 24,
        //   address: "222 Venice Canals",
        //   city: "Venice",
        //   state: "Veneto",
        //   country: "Italy",
        //   lat: 45.44,
        //   lng: 12.32,
        //   name: "Venetian Waterfront Apartment",
        //   description:
        //     "Experience the romance of Venice in this waterfront apartment nestled among the picturesque canals. Take gondola rides, visit historic palaces, and savor the flavors of Italian gelato.",
        //   price: 320.5,
        // },
        // {
        //   ownerId: 25,
        //   address: "777 Enchanted Forest",
        //   city: "Vancouver",
        //   state: "British Columbia",
        //   country: "Canada",
        //   lat: 49.28,
        //   lng: -123.12,
        //   name: "Secluded Treehouse",
        //   description:
        //     "Escape to an enchanted forest in this secluded treehouse near Vancouver. Embrace nature, spot local wildlife, and experience the magic of sleeping among the treetops.",
        //   price: 190.0,
        // },
        // {
        //   ownerId: 26,
        //   address: "333 Wine Country",
        //   city: "Napa Valley",
        //   state: "California",
        //   country: "USA",
        //   lat: 38.5,
        //   lng: -122.47,
        //   name: "Vineyard Retreat",
        //   description:
        //     "Indulge in the world of wine in this vineyard retreat in Napa Valley. Sip on exquisite wines, enjoy farm-to-table dining, and relax amidst scenic vineyards.",
        //   price: 280.0,
        // },
        // {
        //   ownerId: 27,
        //   address: "456 Enchanting Castle",
        //   city: "Edinburgh",
        //   state: "Scotland",
        //   country: "UK",
        //   lat: 55.95,
        //   lng: -3.19,
        //   name: "Historic Scottish Castle",
        //   description:
        //     "Live like royalty in this enchanting castle in Edinburgh. Explore ancient ruins, discover the secrets of the Royal Mile, and experience the rich history of Scotland.",
        //   price: 400.0,
        // },
        // {
        //   ownerId: 28,
        //   address: "101 Serengeti Savannah",
        //   city: "Serengeti",
        //   state: "Arusha",
        //   country: "Tanzania",
        //   lat: -2.33,
        //   lng: 34.83,
        //   name: "Luxury Safari Lodge",
        //   description:
        //     "Embark on an extraordinary safari adventure in the Serengeti at this luxury lodge. Witness the Great Migration, spot rare wildlife, and experience the raw beauty of the African savannah.",
        //   price: 350.0,
        // },
        // {
        //   ownerId: 29,
        //   address: "888 Northern Lights",
        //   city: "Reykjavik",
        //   state: "Capital Region",
        //   country: "Iceland",
        //   lat: 64.15,
        //   lng: -21.95,
        //   name: "Aurora Borealis Cabin",
        //   description:
        //     "Chase the Northern Lights in this cozy cabin near Reykjavik. Experience the magic of dancing lights, soak in geothermal hot springs, and explore the rugged beauty of Iceland.",
        //   price: 230.0,
        // },
        // {
        //   ownerId: 1,
        //   address: "222 Redwood Retreat",
        //   city: "Sequoia National Park",
        //   state: "California",
        //   country: "USA",
        //   lat: 36.56,
        //   lng: -118.77,
        //   name: "Secluded Forest Lodge",
        //   description:
        //     "Escape to the majestic beauty of Sequoia National Park in this secluded forest lodge. Stand among the giants of the ancient redwood trees, hike to cascading waterfalls, and stargaze in pure darkness.",
        //   price: 180.0,
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
    options.tableName = "Spots";
    return queryInterface.bulkDelete(options);
  },
};
