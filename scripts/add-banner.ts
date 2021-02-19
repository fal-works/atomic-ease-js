import * as fs from "fs";
import { banner } from "../config/bundle-config.js";
import { files } from "../config/paths.js";

const run = async (): Promise<void> => {
  const code = await fs.promises.readFile(files.dist.esm);

  await fs.promises.writeFile(
    files.dist.esm,
    `${banner}\n\n${code.toString()}`
  );
};

export default run;
