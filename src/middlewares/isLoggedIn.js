
const isLoggedIn = (req, res, next) => {
    if (req.cookies.username) {
        return next();
    } else {
        res.redirect('/register');
    }
};

export default isLoggedIn;
