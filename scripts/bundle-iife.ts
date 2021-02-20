import esbuild from "esbuild";
import { banner, iifeName } from "../config/bundle-config.js";

const run = async (entryPoint: string, outfile: string): Promise<void> => {
  const baseOptions: esbuild.BuildOptions = {
    entryPoints: [entryPoint],
    platform: "browser",
    banner,
  };

  await esbuild.build({
    ...baseOptions,
    bundle: true,
    outfile,
    format: "iife",
    minify: true,
    target: "es6",
    globalName: iifeName,
  });
};

export default run;
