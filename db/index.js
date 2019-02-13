const db = require('./db')
const { Article, Vote, User } = require('./models')
// sigh
// I am using Sequelize as an ORM for the database.
// It has its own syntax for defining the relations
// in the database. Something like the following:
Article.belongsTo(User)
User.hasMany(Article)

Article.hasMany(Vote)
Vote.belongsTo(Article)

Vote.belongsTo(User)
User.hasMany(Vote)

// the questions are:
// 1. how to store votes in the database? as a count on the article? this would be less accurate but ok for the beginning <- I am not a fan of this approach
// 2. what votes do we count? (anon, per ip address, cookies?) to build relations between votes we need a concept of users based identification <- yep!
// 3. also downvotes? <- so I think to start we shoudl copy what HN does agreed :)
// TODO figure out how HN implements votes (I think non-registered voters can't vote for example)
// re: users: I can implement some hacky user auth to start with... or maybe that's something we delegate to rw (totally_not_fb)
// hn voting
//  regiistration required
//  min karma required for downvoting (comments only?)
// so we could start writing tickets at this point ... ? makes sense
// view content: https://irc.anarchyplanet.org/git/notnull/hacker-news-cli/issues/4
// post content: https://irc.anarchyplanet.org/git/notnull/hacker-news-cli/issues/3
// votes: https://irc.anarchyplanet.org/git/notnull/hacker-news-cli/issues/5

module.exports = db
