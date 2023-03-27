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
    options.tableName = 'Spots';
    return queryInterface.bulkInsert(options, [
      {
        ownerId: 1,
        address: '123 Oak Street',
        city: 'Plainsboro',
        state: 'NJ',
        country: 'USA',
        lat: 50.01,
        lng: 60.01,
        name: 'Treehouse',
        description: 'Fancy Treehouse',
        price: 10.01
      },
      {
        ownerId: 1,
        address: '124 Oak Street',
        city: 'Plainsboro',
        state: 'NJ',
        country: 'USA',
        lat: 50.02,
        lng: 60.02,
        name: 'Treehouse2',
        description: 'Fancier Treehouse',
        price: 20.01
      },
      {
        ownerId: 2,
        address: '124 Oak Street',
        city: 'Plainsboro',
        state: 'NJ',
        country: 'USA',
        lat: 50.02,
        lng: 60.02,
        name: 'Treehouse2',
        description: 'Fancier Treehouse',
        price: 20.01
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
    options.tableName = 'Spots';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      name: { [Op.in]: ['Treehouse'] }
    }, {});
  }
};
