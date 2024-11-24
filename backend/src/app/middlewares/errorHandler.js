
exports.errorHandler = (err, req, res, next) => {
    
    console.error(err.stack);
  
    
    const statusCode = err.status || 500;
    const message = err.message || "Internal Server Error";
  
    
    const errorResponse = {
      error: {
        status: statusCode,
        message,
      },
    };
  
    
    if (process.env.NODE_ENV === "development") {
      errorResponse.error.stack = err.stack;
    }
  
    
    res.status(statusCode).json(errorResponse);
  };  