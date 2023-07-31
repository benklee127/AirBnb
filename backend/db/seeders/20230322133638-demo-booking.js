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
    options.tableName = "Bookings";
    return queryInterface.bulkInsert(
      options,
      [
        {
          spotId: 3,
          userId: 1,
          startDate: new Date("2023-04-01"),
          endDate: new Date("2023-04-01"),
        },
        {
          spotId: 3,
          userId: 1,
          startDate: new Date("2023-05-01"),
          endDate: new Date("2023-05-02"),
        },
        {
          spotId: 3,
          userId: 1,
          startDate: new Date("2023-08-05"),
          endDate: new Date("2023-08-05"),
        },
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
    options.tableName = "Bookings";
    return queryInterface.bulkDelete(options);
  },
};
