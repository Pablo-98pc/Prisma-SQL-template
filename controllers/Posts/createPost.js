const {createPost} = require('../../managers/PostManager')

async function createNewPost(req,res,next){
    try {
        res.status(200).json(await createPost(req.body)) 
    } catch (error) {
        next(error)
    }
    
}

module.exports = createNewPost