const inventoryRouter = require('express').Router();
const InventoryController = require('../controllers/inventoryController');
const authentication = require('../middlewares/authentication');
const authorizeRead = require('../middlewares/authorizeRead');
const authorizeCreate = require('../middlewares/authorizeCreate');
const authorizeUpdate = require('../middlewares/authorizeUpdate');
const authorizeDelete = require('../middlewares/authorizeDelete');

inventoryRouter.use(authentication)

inventoryRouter
    .route('/')
    .get(authorizeRead, InventoryController.viewAll)
    .post(authorizeCreate, InventoryController.addInventory)

inventoryRouter
    .route('/:id')
    .get(authorizeRead, InventoryController.viewInventoryById)
    .put(authorizeUpdate, InventoryController.updateInventory)
    .delete(authorizeDelete, InventoryController.deleteInventory)

module.exports = inventoryRouter