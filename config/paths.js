const pkg = require("../package-info.js");

const dirs = {
  src: "src",
  dist: "lib",
  types: "types",
  distEsm: "lib/esm",
};

const files = {
  srcEntry: `${dirs.src}/index.ts`,
  dist: {
    iife: `${dirs.dist}/atomic-easer.js`,
    esm: pkg.module,
  },
};

module.exports = { dirs, files };
