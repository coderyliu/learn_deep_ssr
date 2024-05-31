import express from "express";
import path from "path";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../App.jsx";

const app = express();

app.use(express.static(path.join(__dirname, "../../dist")));

app.get("/", (req, res) => {
  const AppHtmlString = renderToString(<App />);
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>Hello React</title>
      </head>
      <body>
        <h2>hello coder</h2>
        <div id="root">${AppHtmlString}</div>
        <script src="/client/client_bundle.js"></script>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log("server is running at 3000 port");
});
