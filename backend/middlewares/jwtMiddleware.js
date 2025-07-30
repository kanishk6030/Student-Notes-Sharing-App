const jwt = require("jsonwebtoken");

const jwtAuth = async(req,res,next)=>{
    const token = req.headers.authorization?.split(" ")[1];
    if(!token) return res.status(400).json({
        error:"Unauthorized Access"
    })

    try {
        const decoded = jwt.verify(token , process.env.SECRET);
        req.user = decoded;
        // res.json({
        //     response:req.user,
        // })
        return next();
    } catch (error) {
        return res.status(400).json({
            error:"Unauthorized Access"
        })
    }
}
module.exports = jwtAuth;