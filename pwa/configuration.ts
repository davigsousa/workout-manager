import type { VitePWAOptions } from "vite-plugin-pwa";
import { VitePWA } from "vite-plugin-pwa";

const baseConfiguration: Partial<VitePWAOptions> = {
  includeManifestIcons: false,
  includeAssets: [
    "favicon.ico",
    "robots.txt",
    "apple-touch-icon.png",
    "/pwa/icon-192x192.png",
    "/pwa/icon-512x512.png",
  ],
  base: "/",
  scope: "/",
  manifest: {
    name: "Workout Manager",
    id: "/",
    scope: "/",
    start_url: "/",
    short_name: "Workouts",
    description: "Manage your workouts",
    theme_color: "#ffffff",
    background_color: "#ffffff",
    display: "standalone",
    icons: [
      {
        src: "/pwa-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/pwa-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/pwa-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  },
  workbox: {
    navigateFallback: "/",
    globPatterns: ["**/*.{js,mjs,css,html,ico,png,svg}"],
  },
};

export default function (
  build: boolean,
  pages?: Array<{ url: string; revision?: string }>,
  options?: { outDir: string; globDirectory: string }
) {
  const configuration: Partial<VitePWAOptions> = { ...baseConfiguration };
  if (build) {
    configuration.workbox.globDirectory = options?.outDir || ".output/public/";
    configuration.outDir = options?.globDirectory || ".output/public/_nuxt";
    if (pages)
      configuration.workbox.additionalManifestEntries = pages.reduce(
        (acc, entry) => [...acc, entry],
        []
      );
  }
  return VitePWA(configuration);
}
