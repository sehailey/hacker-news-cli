const express = require('express')
const path = require('path')
const morgan = require('morgan')
const ascii = require('./ascii')
const db = require('./db')
const axios = require('axios')
const app = express()
const port = process.env.PORT || 1337
const buildPage = require('./scripts/buildPage')
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

app.get('/articles', async (req, res) => {
  console.log('path:', app.mountpath)
  try {
    const { data } = await axios.get(`http://localhost:${port}/api/articles`)
    console.log(data)
    const page = buildPage(data)
    res.send(page)
  } catch (e) {
    console.log(e)
  }
})

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
  console.log('mountpath:', app.mountpath)
  console.log(`Doin' haxor stuff on port ${port}`)
})
