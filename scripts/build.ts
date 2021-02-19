import sltr from "@fal-works/s-l-t-r";
import iife from "./build-iife.js";
import addBanner from "./add-banner.js";
import { dirsToClean } from "../config/paths.js";

const { run, cmd, cmdEx, seq, par } = sltr;
const { cleandir } = sltr.builtin;

const clean = par(...dirsToClean.map(cleandir));

const buildEsm = seq(
  cmd("tsc", "--project src/tsconfig.json"),
  par(
    cmd("prettier", "--write lib/esm/**/*.js"),
    cmd("prettier", "--write types/**/*.d.ts")
  ),
  cmdEx(addBanner, "add banner")
);

const buildIife = cmdEx(iife, "build IIFE");

void run(seq(clean, par(buildEsm, buildIife)));
