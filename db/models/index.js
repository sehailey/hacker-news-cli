const Item = require('./item')
const Article = require('./article')
const Comment = require('./comment')
const User = require('./user')

Article.hasMany(Comment) // allows for addComment
Comment.belongsTo(Article)

User.hasMany(Article)
Article.belongsTo(User) // allows for setUser

User.hasMany(Comment)
Comment.belongsTo(User)

// i understand more now: parent must be set instead of reply.

Comment.belongsTo(Comment, { as: 'parent' }) // setParent

module.exports = { Item, Article, Comment, User }
