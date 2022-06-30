const {getPostsByUser} = require('../../managers/PostManager')

async function getUserPost(req,res,next){
    try {
        res.status(200).json(await getPostsByUser(req.params.id)) 
    } catch (error) {
        next(error)
    }
    
}

module.exports = getUserPost