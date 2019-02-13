const Sequelize = require('sequelize');
const db = require('../db');

// votes should be up or down, could either do 'up/'down' or 1/-1
const Vote = db.define('votes', {
  valence: {
    type: Sequelize.ENUM,
    allowNull: false
  }

});

module.exports = Vote;
