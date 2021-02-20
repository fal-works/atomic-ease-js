/**
 * @param dirpath {string}
 * @param ext {string}
 */
const specifyExtension = (dirpath, ext) => `${dirpath}/**/*${ext}`;

/** @param dirpath {string} */
const js = (dirpath) => specifyExtension(dirpath, ".js");

/** @param dirpath {string} */
const ts = (dirpath) => specifyExtension(dirpath, ".ts");

module.exports = { js, ts };
