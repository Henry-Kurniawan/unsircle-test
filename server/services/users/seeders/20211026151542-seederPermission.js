'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = [
      {
        type: "create",
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "update",
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "delete",
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "read",
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ];

    await queryInterface.bulkInsert('Permissions', data);
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Permissions', null, {});
  }
};
