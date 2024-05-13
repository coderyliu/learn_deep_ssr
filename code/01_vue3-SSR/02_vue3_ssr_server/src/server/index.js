import express from 'express'
import { renderToString } from '@vue/server-renderer'
import createApp from '../main.js'

const app = express()

app.get('/*', async (req, res) => {
  const appString = await renderToString(createApp())
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <h1>Vue3 Serve Side Render</h1>
      <div id="app">
        ${appString}
      </div>

    </body>
    </html>
  `)
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})