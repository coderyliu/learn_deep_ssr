const express = require('express')

const app = express()

app.get('/*', async (req, res) => {
  res.send('Hello World coderyliu!')
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})