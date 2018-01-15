module.exports = {
  "globDirectory": "_site/",
  "globPatterns": [
    "**/*.{html,png,xml,css,ico,js,PNG,jpg,json,txt}"
  ],
  "swDest": "./hustle24-sw.js",
  "globIgnores": [
    "../workbox-cli-config.js"
  ],
  "templatedUrls": {
    "/": ["**/*/index.html"]
  }
};