'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
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
    options.tableName = 'Reviews';
    return queryInterface.bulkInsert(options, [
      {
        spotId: 1,
        userId: 1,
        review: 'in an oak tree',
        stars: 5
      },
      {
        spotId: 1,
        userId: 2,
        review: 'not very fancy but it does the job!',
        stars: 4
      },
      {
        spotId: 1,
        userId: 3,
        review: 'I was surprised that it was in fact a treehouse',
        stars: 3
      },
      {
        spotId: 2,
        userId: 1,
        review: 'how did they get electricity in here!',
        stars: 5
      },
      {
        spotId: 3,
        userId: 3,
        review: 'The aforementioned 4000 square feet is real! There has to be some spatial distortion going on...',
        stars: 5
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'Reviews';
    return queryInterface.bulkDelete(options);
  }
};
