import { spawn } from "bun";

spawn({
  cmd: ["bun", "dev"],
  cwd: "./frontend",
  stdout: "inherit",
  stderr: "inherit"
});

spawn({
  cmd: ["bun", "dev"],
  cwd: "./backend",
  stdout: "inherit",
  stderr: "inherit"
});