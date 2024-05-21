module.exports = async function (req, res, next) {
    console.log(req.user);
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(403).send("Access Denied: You don't have enough privileges!");
    }
}