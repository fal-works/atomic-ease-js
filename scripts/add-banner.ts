import * as fs from "fs";
import { banner } from "../config/bundle-config.js";

const run = async (filepath: string): Promise<void> => {
  const code = await fs.promises.readFile(filepath);

  await fs.promises.writeFile(filepath, `${banner}\n\n${code.toString()}`);
};

export default run;
