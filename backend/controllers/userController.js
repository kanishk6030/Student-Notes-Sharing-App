const User = require("../models/user");

module.exports.getUser = async(req,res)=>{
    try {
    const user = await User.findById(req.user.userId).select("-password"); // remove password field
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
}

module.exports.viewOwnProfile = async(req , res)=>{
    const userId = req.user.userId;
    if(userId) {
        const user = await User.findById(userId);
        return user ? res.json({
            response:{
                user:user,
            }
        }) : null;
    }
}
// User by Id
module.exports.showUserProfile = async (req,res)=>{
    const {userId} = req.params;
    const user = await User.findById(userId);
    return user ? res.json({
            response:{
                user:user,
            }
        }) : null;
}

// All users
module.exports.allUsers = async(req,res)=>{
    const users = await User.find();
    return users ? res.json({
            response:{
                users,
            }
        }) : null;
}

// Update Profile
module.exports.updateUser = async(req,res)=>{
    const userId = req.user.userId;
    
    try {
        const updatedUser = await User.findByIdAndUpdate(userId,req.body, { new: true, runValidators: true })
        if(!updatedUser) return res.status(401).json({error:"No User Found"});
        res.json({
            response:updatedUser,
        })
    } catch (error) {
        res.status(400).json({
            error:"Some error occured"
        })
    }
}