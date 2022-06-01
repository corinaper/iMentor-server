const router = require("express").Router();

router.use("/coasters", require('./mentors.routes'))

router.use("/auth", require('./auth.routes'))

router.use("/upload", require('./upload.routes'))

router.get("/", (req, res, next) => {
  res.json("All good in here");
})

module.exports = router