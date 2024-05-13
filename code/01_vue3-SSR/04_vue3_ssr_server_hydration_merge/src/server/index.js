import express from 'express'
import { renderToString } from '@vue/server-renderer'
import createApp from '../main.js'
import path from 'path'

const app = express()
app.use(express.static(path.join(__dirname, '../../dist')))

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
      <script src="/client/client_bundle.js"></script>
    </body>
    </html>
  `)
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})