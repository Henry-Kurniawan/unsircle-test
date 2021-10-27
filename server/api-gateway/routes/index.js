const router = require('express').Router();
const userRouter = require('./userRouter');
const inventoryRouter = require('./inventoryRouter');
const errorHandler = require("../middlewares/errorHandler")

router.use('/users', userRouter);
router.use('/inventories', inventoryRouter);
router.use(errorHandler)

module.exports = router;