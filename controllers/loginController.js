// Render the register.ejs view
const registerView = (req, res) => {
    res.render("register", {
    } );
}
// Render the login.ejs view
const loginView = (req, res) => {

    res.render("login", {
    } );
}

// Exports views
module.exports =  {
    registerView,
    loginView
};