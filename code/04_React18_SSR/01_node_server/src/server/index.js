import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('hello coder!')
})

app.listen(3000, () => {
  console.log('server is running at 3000 port')
})