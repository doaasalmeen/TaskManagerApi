function validatePatch(req, res, next){
    const {title, completed} = req.body;
    if(title === undefined && completed === undefined){
        return res.status(400).json({
            message : "Nothing to update"
        });
    } 
    next();
}
export default validatePatch;