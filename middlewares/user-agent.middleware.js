module.exports = (req,res,next) => {
    const userAgent = req.headers['user-agent']
    console.log(userAgent,"userAgent")
    next()
}