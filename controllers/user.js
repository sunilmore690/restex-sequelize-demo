module.exports = function(restex){
    const User = restex.model('users');
    const getUsers = async (req,res,next)=>{
        let users = await User.findAll();
        res.json(users)
    }
    return {
        getUsers
    }
}