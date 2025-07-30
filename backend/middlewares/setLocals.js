module.exports.setLocals = (req,res,next) =>{
    res.locals.user = req.user;
}