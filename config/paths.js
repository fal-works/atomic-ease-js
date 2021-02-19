const pkg = require("../package-info.js");

const dirs = {
  src: "src",
  dist: "lib",
  types: "types",
};

const files = {
  srcEntry: `${dirs.src}/index.ts`,
  dist: {
    iife: `${dirs.dist}/atomic-easer.js`,
    esm: pkg.module,
  },
};

const dirsToClean = [dirs.dist, dirs.types];

module.exports = { dirs, files, dirsToClean };
