module.exports = async function (req, res, next) {
    // console.log(req.method + ": " + req.url);
    let cart = req.cookies?.cart;
    if (!cart) cart = [];
    res.locals.cart = cart;
    let viewed = req.cookies?.viewed;
    if (!viewed) viewed = [];
    res.locals.viewed = viewed;
    res.locals.user = req.session.user;
    next();
};
