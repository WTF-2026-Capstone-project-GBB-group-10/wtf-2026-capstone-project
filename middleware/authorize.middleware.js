function authorizeMiddleware(...allowedRoles) { return (req, res, next) => {
//console.log(req.user)
//console.log(req.user.role)
    if (!req.user) {
      return res.status(401).json({
        message: 'Authentication required'
      });
    }

//  Ensure user has a role
    if (!req.user.role) {
      return res.status(403).json({
        message: 'User role not found'
      });
    }

//  Check if user's role is allowed

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        message: 'You do not have permission to perform this action'
      });
    }

// User is authorized
    next();
  };
}

module.exports = authorizeMiddleware ;
