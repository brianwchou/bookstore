const { Router } = require('express');

const errorRouter = Router();

errorRouter.all('*', unspecifiedRouteErrorHandler);

function unspecifiedRouteErrorHandler(req, res) {
  res.status(404).send('route not found');
}

module.exports = errorRouter;
