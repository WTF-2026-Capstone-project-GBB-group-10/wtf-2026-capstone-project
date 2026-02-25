function authorizeMiddleware(...allowedRoles) { return (req, res, next) => {

    if (!req.user) {
      return res.status(401).json({
        message: 'Authentication required'
      });
    }


    if (!req.user.role) {
      return res.status(403).json({
        message: 'User role not found'
      });
    }


    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        message: 'You do not have permission to perform this action'
      });
    }


    next();
  };
}

module.exports = authorizeMiddleware ;
