import { promises } from "fs";
import { resolve } from "pathe";
import { request as fetch } from "undici";

const BUILD_TIME = new Date().toUTCString();

const getResource = (url) =>
  url === "/sw.js" ||
  url === "/manifest.webmanifest" ||
  (url.startsWith("/workbox-") && url.endsWith(".js"))
    ? url.slice(1)
    : null;

const staticDirectory = resolve(
  process.env.VERCEL_URL ? "./_nuxt" : "./.output/public/_nuxt"
);

export default async function (request, response, next) {
  const { url } = request;
  const resource = getResource(url);

  if (resource) {
    const filePath = resolve(`${staticDirectory}/${resource}`);
    console.log(
      "Serving file:",
      filePath,
      `https://${process.env.VERCEL_URL}/_nuxt/${resource}`
    );
    const modificationTime = BUILD_TIME;
    const modifiedSinceHeader = request.headers["if-modified-since"];
    if (new Date(modifiedSinceHeader) >= new Date(modificationTime)) {
      response.statusCode = 304;
      return response.end("Not modified");
    }
    response.setHeader(
      "Content-Type",
      resource.endsWith(".js")
        ? "application/javascript"
        : "application/manifest+json"
    );
    response.setHeader("Last-Modified", modificationTime);
    response.setHeader("Cache-Control", "public, max-age=0, must-revalidate");
    return response.end(
      process.env.VERCEL_URL
        ? await (
            await fetch(`https://${process.env.VERCEL_URL}/_nuxt/${resource}`)
          ).body.text()
        : await promises.readFile(filePath)
    );
  } else if (url === "/404") {
    return response.end("Page not found");
  }
  next();
}
