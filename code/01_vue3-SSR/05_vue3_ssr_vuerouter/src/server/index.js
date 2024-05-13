import express from 'express'
import path from 'path'
import { renderToString } from '@vue/server-renderer'
import { createMemoryHistory } from 'vue-router'
import createApp from '../main.js'
import createRouter from '../router/index.js'

const app = express()
app.use(express.static(path.join(__dirname, '../../dist')))

app.get('/*', async (req, res) => {
  const App = createApp()
  const router = createRouter(createMemoryHistory())
  App.use(router)
  await router.push(req.url || "/"); //  /  or /about 等待页面跳转好
  await router.isReady() // 等待(异步)路由加载完成,在渲染页面

  const appString = await renderToString(App)

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