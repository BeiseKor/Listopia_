// Error handling middleware
exports.errorHandler = (err, req, res, next) => {
    // Log the error stack for debugging purposes
    console.error(err.stack);
  
    // Extract the status and message from the error or use defaults
    const statusCode = err.status || 500;
    const message = err.message || "Internal Server Error";
  
    // Build the error response
    const errorResponse = {
      error: {
        status: statusCode,
        message,
      },
    };
  
    // Add stack trace in development mode for easier debugging
    if (process.env.NODE_ENV === "development") {
      errorResponse.error.stack = err.stack;
    }
  
    // Send the error response
    res.status(statusCode).json(errorResponse);
  };  