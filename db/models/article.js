const Sequelize = require('sequelize');
const db = require('../db');

const Article = db.define('articles', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  link: {
    type: Sequelize.STRING
  }
});

module.exports = Article;
