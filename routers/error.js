const { Router } = require('express');
const errorRouter = Router();
const unspecifiedRouteErrorHandler = require('../controllers/error');

errorRouter.all('*', unspecifiedRouteErrorHandler);

module.exports = errorRouter;
