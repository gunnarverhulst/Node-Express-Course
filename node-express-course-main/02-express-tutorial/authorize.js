const authorize = (req,res,next) => {
    const {user} = req.query
    if(user === 'Gunnar'){
        req.user = {name:'Gunnar', id:3}
        next()
    } else {
        res.status(401).send('Unauthorized')
    }
}

module.exports = authorize