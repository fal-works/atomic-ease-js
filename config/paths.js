const pkg = require("../package-info.js");

const dirs = {
  src: "src",
  dist: "lib",
  types: "types",
  distEsm: "lib/esm",
  scripts: "scripts",
  config: "config",
  test: "test",
};

const iifeFilename = "atomic-ease.js";

const files = {
  srcEntry: `${dirs.src}/index.ts`,
  dist: {
    iife: `${dirs.dist}/${iifeFilename}`,
    esm: pkg.module,
  },
};

module.exports = { dirs, files };
