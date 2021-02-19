import { read, write, extract } from "transcribe-json";
import prettier from "prettier";

const srcfile = "package.json";
const outfile = "package-info.js";
const fields = ["name", "version", "author", "license", "module"];
const formatter = (code: string) =>
  prettier.format(code, { filepath: outfile });

export default read(srcfile)
  .then(extract(fields))
  .then(write(outfile, { filetype: "cjs", formatter }));
