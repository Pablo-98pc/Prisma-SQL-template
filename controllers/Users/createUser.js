const {createUser} = require('../../managers/UsersManager')

async function createNewUser(req,res,next){
    try {
        res.status(200).json(await createUser(req.body)) 
    } catch (error) {
        next(error)
    }
    
}

module.exports = createNewUser