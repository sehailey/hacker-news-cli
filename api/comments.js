const router = require('express').Router()
const { Comment } = require('../db/models')
const buildPage = require('../scripts/buildPage')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const comments = await Comment.findAll({
      attributes: ['id', 'title', 'content', 'userId', 'parentId'],
    })
    const page = buildPage(
    res.status(201).send()
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  const newComment = req.body // good sanitization

  try {
    const comment = await Comment.create(newComment)
    res.redirect('http://localhost:1337')
  } catch (err) {
    next(err)
  }
})
