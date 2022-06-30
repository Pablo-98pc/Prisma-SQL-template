const {prisma} = require('../prisma/client')

const createPost = async (body) => {
    const {title,content,authorId,published} = body
    const newPost = await prisma.post.create({
        data:{    
            title,
            content,
            authorId,
            published
        }
    })
    return newPost
}

const updatePost = async (body) => {
    const {title,content,published,id,authorId} = body
    const post = await prisma.post.findUnique({
        where:{
            id
        }
    })
    if (post.authorId != authorId){
        throw new Error ('this user cannot modify this post.')
    }
    const updatedPost = await prisma.post.update({
        where:{
            id
        },
        data:{
            title,
            content,
            published
        }
        
    })
    return updatedPost
}


const getPostsByUser = async (params) => {
    const authorId = params

    const userPosts = prisma.post.findMany({
        where:{
            authorId:parseInt(authorId)
        }
    })
    return userPosts
}



module.exports = {createPost,getPostsByUser,updatePost}