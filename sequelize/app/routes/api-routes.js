var sqlUser = require("../models/Users.js");


module.exports = function(app) {

    

    app.get("/user/:user_id?", function(req, res) {

        console.log("Users say hello");

        if (req.params.user_id) {
            sqlUser.findAll({
                where: {
                    user_id: req.params.user_id
                }
            }).then(function(result) {
                res.json(result);
            });
        } else {

            // Run a quick test to confirm.
            sqlUser.findAll({})
                .then(function(result) {
                    res.json(result);
                });
        }
    });

    
};
