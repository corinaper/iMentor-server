const router = require("express").Router()

const { isAuthenticated } = require("../middlewares/jwt.middleware")
const OwnerOnly = require("../middlewares/ownerOnly.middleware")
const Users = require('../models/Users.model')

router.get("/api/mentors", isAuthenticated, (req, res) => {

  Users
    .find({type:"mentor"})
    .then(users => res.json(users))
    .catch(err => res.status(500).json(err))
})

router.get("/profile/:id", isAuthenticated, (req, res) => {

  const { id } = req.params

  Users
    .findById(id)
    .then(user => res.json(user))
    .catch(err => res.status(500).json(err))
})


router.post("/profile/:id/edit", OwnerOnly, (req, res) => {

  const { type, email,aboutMe, profileImg, course, graduationYear,skills,ocuppation,company } = req.body
  const id = req.params

  Users
    .findByIdandUpdate(id, { type, email,aboutMe, profileImg, course, graduationYear,skills,ocuppation,company })
    .then(updatedUser => res.json(updatedUser))
    .catch(err => res.status(500).json(err))
})




module.exports = router