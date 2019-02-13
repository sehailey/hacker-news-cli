const Item = require('./item')
const Article = require('./article')
const Comment = require('./comment')
//const User = require('./user')

Article.hasMany(Comment) //puts postId on Comment
Comment.belongsTo(Article)

//User.hasMany(Article) //puts userId on Post, creates instance method 'user.getPosts()'
//Article.belongsTo(User) // creates instance method 'post.getUser()''

//User.hasMany(Comment) //puts userId on Comment
//Comment.belongsTo(User) //puts userId on Comment

// TODO
//Comment.belongsTo(Comment, { as: 'parent' })
//Comment.hasMany(Comment, { as: { singular: 'reply', plural: 'replies' } })

module.exports = { Item, Article, Comment }
