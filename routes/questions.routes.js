const router = require("express").Router()

const { isAuthenticated } = require("../middlewares/jwt.middleware")
const { OwnerOnly } = require("../middlewares/ownerOnly.middleware")
const Users = require('../models/User.model')
const Questions = require('../models/question.model')
const Comments = require('../models/comment.model')

router.get("/questions", isAuthenticated, (req, res) => {

 Questions
    .find()
    .then(questions => res.json(questions))
    .catch(err => res.status(500).json(err))
})

router.post("/questions", isAuthenticated, (req, res) => {
    const { image, title, text } = req.body
    const user = req.payload._id

    Questions
       .create({ image, user, title, text,  })
       .then(questions => res.json(questions))
       .catch(err => res.status(500).json(err))
   })

router.post("/questions/:id/edit", isAuthenticated, (req, res) => {
    const { image, title, text } = req.body
    const user = req.payload._id
    const id = req.params

    Questions
       .findByIdAndUpdate(id, { image, user, title, text,  })
       .then(questions => res.json(questions))
       .catch(err => res.status(500).json(err))
   })

router.get("/questions/:id", isAuthenticated, (req, res) => {
    
    const id = req.params

    Questions
       .findById(id)
       .then(question => res.json(question))
       .catch(err => res.status(500).json(err))
   })

router.delete("/questions/:id/delete", (req, res) => {
    
    const id = req.params

    Questions
       .findByIdAndDelete(id)
       .catch(err => res.status(500).json(err))
   })

router.post("/questions/:id/comment/add", isAuthenticated, (req, res) => {
    const { message } = req.body
    const questionId = req.params
    const userId = req.payload._id

    Comments
    .create({ user: userId,text: message})
    .then((newComment)=>
    Questions
    .findByIdAndUpdate(questionId, {$push: { Comments: newComment._id}})
    .then(()=>
    Users
    .findByIdAndUpdate(userId, {$push: { Comments: newComment._id}})
    ))
    .catch((err)=>console.log(err))

   
   })

module.exports = router