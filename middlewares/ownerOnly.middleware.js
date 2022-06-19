function isOwner(req,res,next){
    return req.payload._id === req.params.userId
}


module.exports = {
    isOwner
}