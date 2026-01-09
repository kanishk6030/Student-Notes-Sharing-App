const jwt = require("jsonwebtoken");

const jwtAuth = async(req,res,next)=>{
    // Try to get token from Authorization header first, then from cookies
    let token = req.headers.authorization?.split(" ")[1];
    
    if (!token) {
        token = req.cookies.token;
    }
    
    if(!token) return res.status(401).json({
        error:"Unauthorized Access"
    })

    try {
        const decoded = jwt.verify(token , process.env.JWT_SECRET || process.env.SECRET);
        req.user = decoded;
        return next();
    } catch (error) {
        console.error("Token verification error:", error);
        return res.status(401).json({
            error:"Unauthorized Access"
        })
    }
}
module.exports = jwtAuth;