const jtw = require('jsonwebtoken')

const verifyToken = (req,res,next) => {
    let token = req.headers['authorization']
    token = token.split(/Bearer /).filter((e) => e !== "")[0];
    
    if (!token) return res.status(401).json({ error: "Acceso denegado" });

    jtw.verify(token,process.env.SECRET,function(err){
        if(err){
            res.status(400).json({ error: "token no es válido" });
        } else {
            next();
        }
    })
}

module.exports = verifyToken