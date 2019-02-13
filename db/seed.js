const db = require('../db')
const { Article, Comment, User } = require('./models')

const testArticle = {
  title: 'read desert',
  link: 'https://readdesert.org',
}

const testArticle2 = {
  title: 'the best place ever',
  link: 'https://irc.anarchyplanet.org',
}
const testComment = {
  title: 'best essay ever',
  content: 'read the sand book already!',
}

const testReply = {
  title: 'u r so dumb',
  content: 'i hate anews :P',
}

const testReply2 = {
  title: 'best essay ever',
  content: 'read the sand book already!',
}

const testUser = {
  username: 'nn',
}

async function runSeed() {
  await db.sync({ force: true })
  console.log('db synced!')
  console.log('seeding...')
  try {
    const article = await Article.create(testArticle)

    const user = await User.create(testUser)
    const c1 = await Comment.create(testComment)
    const c2 = await Comment.create(testReply)
    const c3 = await Comment.create(testReply2)
    await article.setUser(user)
    await c1.setUser(user)
    await c2.setUser(user)
    await article.addComment(c1)

    await c2.setParent(c1)
    await c3.setParent(c2)
    //    await c2.setParent(c1)

    console.log('seeded successfully')
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

runSeed()
