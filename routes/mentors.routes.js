const router = require("express").Router()

const { isAuthenticated } = require("../middlewares/jwt.middleware")

const Users = require('../models/User.model')

router.get("/", (req, res) => {

  Users
    .find({userType:"mentor"})
    .then(users => res.json(users))
    .catch(err => res.status(500).json(err))
})



module.exports = router