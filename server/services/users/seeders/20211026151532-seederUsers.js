'use strict';
const { encode } = require("../helpers/bcrypt")
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = [
      {
        email: "user1@mail.com",
        password: encode("12345"),
        name: "Hanry",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: "user2@mail.com",
        password: encode("12345"),
        name: "Budi",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: "user3@mail.com",
        password: encode("12345"),
        name: "Iman",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: "user4@mail.com",
        password: encode("12345"),
        name: "Fikri",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: "user5@mail.com",
        password: encode("12345"),
        name: "Rani",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ];

    await queryInterface.bulkInsert('Users', data);
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Users', null, {});
  }
};
