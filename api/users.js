const router = require('express').Router()
const { User } = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({ include: User })
    res.status(201).json(users)
  } catch (err) {
    next(err)
  }
})
