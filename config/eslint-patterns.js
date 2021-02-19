const pattern = {
  src: `src/**/*.ts`,
  scriptsTs: `scripts/**/*.ts`,
  scriptsJs: `scripts/**/*.js`,
  config: "config/**/*.js",
  test: `test/**/*.js`,
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

const ignorePatterns = [`/lib/`, `/test/out/`];

module.exports = {
  patterns,
  ignorePatterns,
};
