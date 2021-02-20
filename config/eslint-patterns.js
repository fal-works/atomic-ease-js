const { dirs } = require("./paths.js");
const { js, ts } = require("./path-util.js");

const ignorePatterns = [`/${dirs.dist}/`, `/${dirs.test}/out/`];

const pattern = {
  src: ts(dirs.src),
  scriptsTs: ts(dirs.scripts),
  scriptsJs: js(dirs.scripts),
  config: js(dirs.config),
  test: js(dirs.test),
  eslintrc: ".eslintrc.js",
};

const patterns = (() => {
  const src = [pattern.src];
  const scriptsTs = [pattern.scriptsTs];
  const scriptsJs = [pattern.scriptsJs];
  const scriptsAll = [...scriptsTs, ...scriptsJs];
  const lintedTs = [pattern.src, pattern.scriptsTs];
  const lintedJs = [
    pattern.scriptsJs,
    pattern.config,
    pattern.test,
    pattern.eslintrc,
  ];
  const lintedAll = [...lintedTs, ...lintedJs];
  const node = [...scriptsAll, pattern.config, pattern.eslintrc];
  return { src, scriptsTs, scriptsAll, lintedTs, lintedAll, node };
})();

module.exports = {
  ignorePatterns,
  patterns,
};
