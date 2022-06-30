const {prisma} = require('../prisma/client')
const bcrypt = require('bcrypt')
const jtw = require('jsonwebtoken')

const createUser = async (body) => {
    const {name,email,password} = body
    const rounds = 10
    const passwordHash = await bcrypt.hash(password,rounds)
    const userExists = await prisma.user.findUnique({
        where:{
            email
        }
    })
    if(userExists){
        throw new Error('email is being used')
    }
    const newUser = await prisma.user.create({
        data: {
            name,
            email,
            password : passwordHash
        }
    }) 
    const userToken = {
        id:newUser.id,
        email:newUser.email
    } 
    const token = jtw.sign(userToken,process.env.SECRET)
    const userRegistered = {
        id:newUser.id,
        email:newUser.email,
        token
    }
    return userRegistered
}

const LoginUser = async (body) => {
    const {email,password} = body
    const user = await prisma.user.findUnique({
        where:{
            email
        }
    })
    const passwordCorrect = user === null 
        ? false
        : await bcrypt.compare(password,user.password)
            if(!(user && passwordCorrect)){
                throw new Error('wrong credentials')
            }else{
                const userToken = {
                    id : user.id,
                    email : user.email
                }
                const token = jtw.sign(userToken,process.env.SECRET)
                const userLogged = {
                    id:user.id,
                    email:user.email,
                    token
                }
                return userLogged
            }  
            
            
}

const autoCompleteUser = (body) => {
    const {name} = body
    const users = prisma.user.findMany({
        where:{
            name: {
                startsWith : name,
                mode:'insensitive'
            }
        }
    })
    return users
}

module.exports = {createUser,LoginUser,autoCompleteUser}