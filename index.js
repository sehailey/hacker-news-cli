const express = require('express')
const path = require('path')
const morgan = require('morgan')
const ascii = require('./ascii')
const db = require('./db')

const app = express()
const port = process.env.PORT || 1337

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

app.use(morgan('tiny'))

// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(require('body-parser').text())
app.use('/api', require('./api'))
app.use('/articles', require('./api/articles'))

app.get('*', (req, res) => res.send('try again.'))

// error handling endware
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
  next()
})

app.listen(port, () => {
  console.log(`\n${ascii}\n`)
  console.log(`Doin' haxor stuff on port ${port}`)
})
