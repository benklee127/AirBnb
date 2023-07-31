"use strict";
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = "Users";
    return queryInterface.bulkInsert(
      options,
      [
        {
          firstName: "demofirst1",
          lastName: "demolast1",
          email: "demo@user.io",
          username: "Demo-lition",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          firstName: "Oliver",
          lastName: "Garcia",
          email: "oliver.garcia@example.com",
          username: "olivergarc",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          firstName: "Aisha",
          lastName: "Abdullah",
          email: "aisha.abdullah@example.com",
          username: "aisha_a",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          firstName: "Hiroshi",
          lastName: "Sato",
          email: "hiroshi.sato@example.com",
          username: "sato_hiro",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          firstName: "Isabella",
          lastName: "Nguyen",
          email: "isabella.nguyen@example.com",
          username: "bella_nguyen",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          firstName: "Sanjay",
          lastName: "Patel",
          email: "sanjay.patel@example.com",
          username: "spatel22",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          firstName: "Yuki",
          lastName: "Nakamura",
          email: "yuki.nakamura@example.com",
          username: "yukinaka",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          firstName: "Lila",
          lastName: "Andrade",
          email: "lila.andrade@example.com",
          username: "lila_a",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          firstName: "Jasmine",
          lastName: "Gupta",
          email: "jasmine.gupta@example.com",
          username: "spicyjas",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          firstName: "Rafael",
          lastName: "Moreno",
          email: "rafael.moreno@example.com",
          username: "salsa_rafa",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          firstName: "Leila",
          lastName: "Chung",
          email: "leila.chung@example.com",
          username: "zen_lei",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          firstName: "Amir",
          lastName: "Ahmed",
          email: "amir.ahmed@example.com",
          username: "wanderer_amir",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          firstName: "Isabella",
          lastName: "Lopez",
          email: "isabella.lopez@example.com",
          username: "bella_latina",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          firstName: "Mohammed",
          lastName: "Ali",
          email: "mohammed.ali@example.com",
          username: "boxing_momo",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          firstName: "Amina",
          lastName: "Khan",
          email: "amina.khan@example.com",
          username: "currylover_amina",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          firstName: "Liam",
          lastName: "Nguyen",
          email: "liam.nguyen@example.com",
          username: "viet_american",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          firstName: "Yara",
          lastName: "Hassan",
          email: "yara.hassan@example.com",
          username: "arabian_nights",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          firstName: "Dante",
          lastName: "Ricci",
          email: "dante.ricci@example.com",
          username: "italian_dante",
          hashedPassword: bcrypt.hashSync("password"),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = "Users";
    return queryInterface.bulkDelete(options);
  },
};
