const {LoginUser} = require('../../managers/UsersManager')

async function LoginNewUser(req,res,next){
    try {
        res.status(200).json(await LoginUser(req.body))  
    } catch (error) {
        next(error)
    }
    
}

module.exports = LoginNewUser