import esbuild from "esbuild";
import { banner, iifeName } from "../config/bundle-config.js";
import { files } from "../config/paths.js";

const run = async (): Promise<void> => {
  const baseOptions: esbuild.BuildOptions = {
    entryPoints: [files.srcEntry],
    platform: "browser",
    banner,
  };

  await esbuild.build({
    ...baseOptions,
    bundle: true,
    outfile: files.dist.iife,
    format: "iife",
    minify: true,
    target: "es6",
    globalName: iifeName,
  });
};

export default run;
