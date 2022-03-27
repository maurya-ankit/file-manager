#! /usr/bin/env node

const { spawn } = require("child_process");
var args = process.argv.slice(2);
let port = args[args.indexOf('-p')+1] || 7070
process.env.PORT=port;
const ls = spawn(`node`, [`${__dirname}/server.js`]);
ls.stdout.on("data", data => {
    console.log(`stdout: ${data}`);
});

ls.stderr.on("data", data => {
    console.log(`stderr: ${data}`);
});

ls.on('error', (error) => {
    console.log(`error: ${error.message}`);
});

ls.on("close", code => {
    console.log(`child process exited with code ${code}`);
});
