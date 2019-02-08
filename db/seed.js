const db = require('../db');
const { Article } = require('./models');

const testArticle = {
  title: 'read desert',
  link: 'https://readdesert.org'
};

console.log(Article);
async function runSeed() {
  await db.sync({ force: true });
  console.log('db synced!');
  console.log('seeding...');
  try {
    await Article.create(testArticle);
    console.log('seeded successfully');
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

runSeed();
