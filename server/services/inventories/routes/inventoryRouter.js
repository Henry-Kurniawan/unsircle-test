const inventoryRouter = require('express').Router();
const InventoryController = require('../controllers/inventoryController');

inventoryRouter
    .route('/')
    .get(InventoryController.viewAll);

module.exports = inventoryRouter