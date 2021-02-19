const pkg = require("../package-info.js");

const banner = `/**
 * atomic-easer
 * @version ${pkg.version}
 * @license ${pkg.license}
 */`;

const iifeName = "atomicEaser";

module.exports = { banner, iifeName };
