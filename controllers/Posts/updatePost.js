const {updatePost} = require('../../managers/PostManager')

async function updateSinglePost(req,res,next){
    try {
        res.status(200).json(await updatePost(req.body)) 
    } catch (error) {
        next(error)
    }
    
}

module.exports = updateSinglePost