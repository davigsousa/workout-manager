import { resolveConfig } from "vite";
import PWAConfig from "./configuration";

process.env.NITRO_PRESET = process.env.VERCEL_URL ? "vercel" : "node-server";

const getManifestPath = () =>
  ({
    vercel:
      "../.vercel_build_output/functions/node/server/chunks/app/client.manifest.mjs",
  }[process.env.NITRO_PRESET] ||
  "../.output/server/chunks/app/client.manifest.mjs");

const getOutputOptions = () =>
  ({
    vercel: {
      outDir: "./.vercel_build_output/static/",
      globDirectory: "./.vercel_build_output/static",
    },
  }[process.env.NITRO_PRESET]);

const buildPwa = async () => {
  const { default: entries } = await import(getManifestPath());
  console.log(
    `Fetching manifests for ${process.env.NITRO_PRESET}` || "node-server"
  );
  const pages = Object.keys(entries)
    .filter((page) => page.startsWith("pages/"))
    .map((page) => {
      let url = page.slice(5);
      url = url.slice(0, url.indexOf("."));
      if (url === "/index") url = "/";
      console.log(`\t${page} => ${url}`);
      return { url, revision: null };
    });
  const VitePWAPlugin = PWAConfig(true, pages, getOutputOptions());
  const config = await resolveConfig(
    { plugins: [VitePWAPlugin] },
    "build",
    "production"
  );

  const pwaPlugin = config.plugins.find(
    (i) => i.name === "vite-plugin-pwa"
  )?.api;
  if (pwaPlugin?.generateSW) {
    console.log("Generating PWA...");
    await pwaPlugin.generateSW();
  }
};

buildPwa();
