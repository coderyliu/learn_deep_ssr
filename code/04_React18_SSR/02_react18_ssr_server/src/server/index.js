import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../App.jsx";

const app = express();

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
        <div id="root">${AppHtmlString}</div>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log("server is running at 3000 port");
});
