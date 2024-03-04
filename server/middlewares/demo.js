

//check if demo user
exports.isDemo = async (req, res, next)=> {
    console.log(req.user.email);
    
    next();
}