const errorMiddleware = (err, req, res, next) => {
    try {
      let error = { ...err };
      error.message = err.message;
      console.error(err);
  
      // Handle invalid MongoDB ObjectId
      if (err.name === "CastError") {
        const message = "Resource not found";
        error = new Error(message);
        error.statusCode = 404;
      }
  
      // Handle duplicate keys
      if (err.code === 11000) {
        const message = "Duplicate field value entered";
        error = new Error(message);
        error.statusCode = 400;
      }
  
      // Handle validation errors
      if (err.name === "ValidationError") {
        const message = Object.values(err.errors).map((val) => val.message);
        error = new Error(message.join(", "));
        error.statusCode = 400;
      }
  
      res
        .status(error.statusCode || 500)
        .json({ success: false, error: error.message || "Server error" });
    } catch (catchError) {
      next(catchError);
    }
  };
  
  export default errorMiddleware;

  