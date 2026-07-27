function errorHandler (err, res, req, next){
    console.error(error);
    return res.status(500).json({
        message: "Internal server error"
    });
}
export default errorHandler;