function validateTask (req, res, next){
    if(!req.body.title){
        res.status(400).json({
            message: "Title is required"
        });
    }
    next();
}
module.exports = validateTask;