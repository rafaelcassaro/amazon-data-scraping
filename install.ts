import { spawn } from "bun";

await spawn({
  cmd: ["bun", "install"],
  cwd: "./frontend",
  stdout: "inherit",
  stderr: "inherit"
});

await spawn({
  cmd: ["bun", "install"],
  cwd: "./backend",
  stdout: "inherit",
  stderr: "inherit"
});
