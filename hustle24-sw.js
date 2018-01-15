importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "404/index.html",
    "revision": "b993e7c805a2d10bc63e332d114522f2"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "4e46d49d9be1cec89190e657d9b1d09c"
  },
  {
    "url": "android-chrome-512x512.png",
    "revision": "8c5658d2c6e5bbb9fce5b53122aee25d"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "de8e6546ac66d96d9161771890ac6a38"
  },
  {
    "url": "atom.xml",
    "revision": "ac56b7eadfb54ddaaeb8ed9889c6bc0a"
  },
  {
    "url": "browserconfig.xml",
    "revision": "a493ba0aa0b8ec8068d786d7248bb92c"
  },
  {
    "url": "css/styles.css",
    "revision": "64f3eb3c7e510e3876d5eef87e39f45d"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "16a60d3e0fb8d7123aee0f47cdaf1f56"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "1c89f064e6fb018bfe76c84f85f5320c"
  },
  {
    "url": "favicon.ico",
    "revision": "8a029adb944097685eeb094dd46f2e90"
  },
  {
    "url": "hustle24-sw.js",
    "revision": "50f1abeedf3f84e15778498db1a2f077"
  },
  {
    "url": "images/2017/11/29/IMG_0849.PNG",
    "revision": "b57adcfc3b917f0a4c47da4824615f37"
  },
  {
    "url": "images/2017/11/29/IMG_0850.PNG",
    "revision": "dfca6ba1d0a9d936f5bcfb68b42d60d7"
  },
  {
    "url": "images/2017/11/29/IMG_0851.PNG",
    "revision": "51b45a22d9b0baa65b68c246a23b431c"
  },
  {
    "url": "images/2017/11/29/IMG_0852.PNG",
    "revision": "2535fc76db3a294fafef19e1eb6c2637"
  },
  {
    "url": "images/front.jpg",
    "revision": "605e096843b5e1a4c251f1431c645288"
  },
  {
    "url": "images/hr.png",
    "revision": "ac4a191e56f8541e0fbab927245d5cba"
  },
  {
    "url": "images/og.jpg",
    "revision": "f12c95c59a266660cbe1f53b45962c00"
  },
  {
    "url": "index.html",
    "revision": "6461822f2e50f1de873255cf729e7ee2"
  },
  {
    "url": "js/application.js",
    "revision": "1ae7a600a9de69b48db462e2cd9646b9"
  },
  {
    "url": "manifest.json",
    "revision": "5e0d2d2bbafdcbf815e1905b3290df35"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "e647ba10742607f07eb9305e253e694c"
  },
  {
    "url": "posts/2017/11/29/buying-cryptocurrency-with-coinbase/index.html",
    "revision": "ceb737de171fcd7d09d764b2fbc0eeb4"
  },
  {
    "url": "posts/2017/12/08/value-the-hammer-and-the-nail/index.html",
    "revision": "ad62a6ecd4b2960d3823e5c7100cbe88"
  },
  {
    "url": "posts/2017/12/15/can-i-justify-crypto-mining/index.html",
    "revision": "90f2d1a387dc1a8cc41d060abda0bca6"
  },
  {
    "url": "robots.txt",
    "revision": "d3b8d8cde26b65f660ff8f8b0879ee94"
  },
  {
    "url": "sitemap.xml",
    "revision": "0d0d5566e4147bc788c65c1ad58588f5"
  },
  {
    "url": "workbox-cli-config.js",
    "revision": "0884c73c0418c5f55e7ce2d86f6ea5a8"
  },
  {
    "url": "workbox-sw.prod.v2.1.2.js",
    "revision": "685d1ceb6b9a9f94aacf71d6aeef8b51"
  },
  {
    "url": "/",
    "revision": "6fd5d22125bc69b9d9aec0a2aa6002e0"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
