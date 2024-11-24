function authorize(requiredRoles) {
    return (req, res, next) => {
      const userProfile = req.headers["x-user-profile"];
      if (!userProfile) {
        return res.status(401).json({
          uuAppErrorMap: { errorType: "Unauthorized", message: "User not authenticated" },
        });
      }
  
      const { role } = JSON.parse(userProfile);
      if (!requiredRoles.includes(role)) {
        return res.status(403).json({
          uuAppErrorMap: { errorType: "Forbidden", message: "Access denied" },
        });
      }
  
      next();
    };
  }
  
  module.exports = authorize;  