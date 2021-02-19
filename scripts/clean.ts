import * as fs from "fs";
import { dirsToClean } from "../config/paths.js";

const remove = (path: string) =>
  fs.promises.rm(path, { recursive: true, force: true });

export default Promise.all(dirsToClean.map(remove));
