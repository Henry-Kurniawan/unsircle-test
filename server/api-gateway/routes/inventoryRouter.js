const inventoryRouter = require('express').Router();
const InventoryController = require('../controllers/inventoryController');
const authentication = require('../middlewares/authentication');
const authorizeRead = require('../middlewares/authorizeRead');

inventoryRouter.use(authentication)

inventoryRouter
    .route('/')
    .get(authorizeRead, InventoryController.viewAll)
//     .post(InventoryController.addInventory)

// inventoryRouter
//     .route('/:id')
//     .put(InventoryController.updateInventory)
//     .delete(InventoryController.deleteInventory)

module.exports = inventoryRouter