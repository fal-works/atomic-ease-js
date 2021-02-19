const pkg = require("../package-info.js");

const banner = `/**
 * atomic-ease
 * @version ${pkg.version}
 * @license ${pkg.license}
 */`;

const iifeName = "atomicEase";

module.exports = { banner, iifeName };
