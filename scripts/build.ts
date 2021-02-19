import sltr from "@fal-works/s-l-t-r";
import iife from "./build-iife.js";
import addBanner from "./add-banner.js";
import { dirs } from "../config/paths.js";

const { run, cmd, cmdEx, seq, par } = sltr;
const { cleandir } = sltr.builtin;

const clean = par(...[dirs.dist, dirs.types].map(cleandir));

const buildEsm = seq(
  cmd("tsc", `--project ${dirs.src}/tsconfig.json`),
  par(
    cmd("prettier", `--write ${dirs.distEsm}/**/*.js`),
    cmd("prettier", `--write ${dirs.types}/**/*.d.ts`)
  ),
  cmdEx(addBanner, "add banner")
);

const buildIife = cmdEx(iife, "build IIFE");

void run(seq(clean, par(buildEsm, buildIife)));
