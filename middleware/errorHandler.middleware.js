const handleSequelizeError = require('../errors/sequelizeErrors');
const AppError = require('../errors/AppError');

const errorHandler = (err, req, res, next) => {
  console.error(err);

  let error = err;

  if (err.name && err.name.startsWith('Sequelize')) {
    error = handleSequelizeError(err);
  }

  
  if (err.name === 'TokenExpiredError') {
    error = new AppError('Session expired, please login again', 401);
  }

  if (err.name === 'JsonWebTokenError') {
    error = new AppError('Invalid token', 401);
  }

  if (!(error instanceof AppError)) {
    error = new AppError(err.message || 'Something went wrong', 500);
  }

  return res.status(error.statusCode).json({
    success: false,
    status: error.status,
    message: error.message,
    ...(error.details && { details: error.details })
  });
};

module.exports = errorHandler;

