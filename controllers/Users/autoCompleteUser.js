const {autoCompleteUser} = require('../../managers/UsersManager')

async function findUserAutocomplete(req,res,next){
    try {
        res.status(200).json(await autoCompleteUser(req.body)) 
    } catch (error) {
        next(error)
    }
    
}

module.exports = findUserAutocomplete