import path from "path";
import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import { createCellsRouter } from "./routes/cells";

export const serve = (
  port: number,
  filename: string,
  dir: string,
  useProxy: boolean
) => {
  const app = express();

  app.use(createCellsRouter(filename, dir));

  if (useProxy) {
    app.use(
      createProxyMiddleware({
        ws: true,
        target: "http://localhost:3000",
        logLevel: "silent",
      })
    );
  } else {
    const packagePath = require.resolve(
      "@bronote/local_client/build/index.html"
    );
    app.use(express.static(path.dirname(packagePath)));
  }

  return new Promise<void>((resolve, reject) => {
    app.listen(port, resolve).on("error", reject);
  });
};
