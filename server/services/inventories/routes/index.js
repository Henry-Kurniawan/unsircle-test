const router = require('express').Router();
const inventoryRouter = require('./inventoryRouter');
const errorHandler = require("../middlewares/errorHandler")

router.use('/inventories', inventoryRouter);
router.use(errorHandler)

module.exports = router;