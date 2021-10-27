'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = [
      {
        name: "T-shirt Polo lengan pendek",
        type: "T-shirt",
        stock: 10,
        price: 100000,
        status: "active",
        OwnerId: 1
      },
      {
        name: "Jeans Lee Cooper 2021 Edition",
        type: "Celana Jeans",
        stock: 15,
        price: 150000,
        status: "active",
        OwnerId: 1
      },
      {
        name: "Levi's Real Men Jeans",
        type: "Celana Jeans",
        stock: 8,
        price: 180000,
        status: "active",
        OwnerId: 1
      },
      {
        name: "Prada Shirt White",
        type: "Shirt",
        stock: 20,
        price: 200000,
        status: "active",
        OwnerId: 1
      },
      {
        name: "T-shirt Polo lengan pendek",
        type: "T-shirt",
        stock: 10,
        price: 100000,
        status: "active",
        OwnerId: 2
      },
      {
        name: "Jeans Lee Cooper 2021 Edition",
        type: "Celana Jeans",
        stock: 15,
        price: 150000,
        status: "active",
        OwnerId: 2
      },
      {
        name: "Levi's Real Men Jeans",
        type: "Celana Jeans",
        stock: 8,
        price: 180000,
        status: "active",
        OwnerId: 2
      },
      {
        name: "Prada Shirt White",
        type: "Shirt",
        stock: 20,
        price: 200000,
        status: "active",
        OwnerId: 2
      },
      {
        name: "T-shirt Polo lengan pendek",
        type: "T-shirt",
        stock: 10,
        price: 100000,
        status: "active",
        OwnerId: 3
      },
      {
        name: "Jeans Lee Cooper 2021 Edition",
        type: "Celana Jeans",
        stock: 15,
        price: 150000,
        status: "active",
        OwnerId: 3
      },
      {
        name: "Levi's Real Men Jeans",
        type: "Celana Jeans",
        stock: 8,
        price: 180000,
        status: "active",
        OwnerId: 3
      },
      {
        name: "Prada Shirt White",
        type: "Shirt",
        stock: 20,
        price: 200000,
        status: "active",
        OwnerId: 3
      },
      {
        name: "T-shirt Polo lengan pendek",
        type: "T-shirt",
        stock: 10,
        price: 100000,
        status: "active",
        OwnerId: 4
      },
      {
        name: "Jeans Lee Cooper 2021 Edition",
        type: "Celana Jeans",
        stock: 15,
        price: 150000,
        status: "active",
        OwnerId: 4
      },
      {
        name: "Levi's Real Men Jeans",
        type: "Celana Jeans",
        stock: 8,
        price: 180000,
        status: "active",
        OwnerId: 4
      },
      {
        name: "Prada Shirt White",
        type: "Shirt",
        stock: 20,
        price: 200000,
        status: "active",
        OwnerId: 4
      },
      {
        name: "T-shirt Polo lengan pendek",
        type: "T-shirt",
        stock: 10,
        price: 100000,
        status: "active",
        OwnerId: 5
      },
      {
        name: "Jeans Lee Cooper 2021 Edition",
        type: "Celana Jeans",
        stock: 15,
        price: 150000,
        status: "active",
        OwnerId: 5
      },
      {
        name: "Levi's Real Men Jeans",
        type: "Celana Jeans",
        stock: 8,
        price: 180000,
        status: "active",
        OwnerId: 5
      },
      {
        name: "Prada Shirt White",
        type: "Shirt",
        stock: 20,
        price: 200000,
        status: "active",
        OwnerId: 5
      },
    ];

    data.forEach((el) => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
    });


    await queryInterface.bulkInsert('Inventories', data)
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Inventories', null, {});
    
  }
};
