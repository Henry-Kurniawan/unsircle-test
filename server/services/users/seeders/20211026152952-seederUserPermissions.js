'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = [
      {
        UserId: 1,
        PermissionId: 1,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 2,
        PermissionId: 1,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 2,
        PermissionId: 2,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 3,
        PermissionId: 1,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 3,
        PermissionId: 2,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 3,
        PermissionId: 3,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 4,
        PermissionId: 1,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 4,
        PermissionId: 2,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 4,
        PermissionId: 3,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 4,
        PermissionId: 4,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 5,
        PermissionId: 1,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 5,
        PermissionId: 4,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ];

    await queryInterface.bulkInsert('UserPermissions', data);
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('UserPermissions', null, {});
  }
};
