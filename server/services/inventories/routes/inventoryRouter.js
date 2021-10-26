const inventoryRouter = require('express').Router();
const InventoryController = require('../controllers/inventoryController');

inventoryRouter
    .route('/')
    .get(InventoryController.viewAll)
    .post(InventoryController.addIventory)

inventoryRouter
    .route('/:id')
    .put(InventoryController.updateInventory)
    .delete(InventoryController.deleteInventory)

module.exports = inventoryRouter