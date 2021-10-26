'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'UserPermissions',
      'PermissionId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Permissions', 
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      'UserPermissions',
      'PermissionId'
    );
  }
};
