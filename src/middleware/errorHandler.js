function errorHandler (err, res, req, next){
    console.error(err);
    res.status(500).json({
        message: "Internal server error"
    });
}
export default errorHandler;