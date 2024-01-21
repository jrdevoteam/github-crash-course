const core = require("@actions/core");
const github = require("@actions/github");
const exec = require("@actions/exec");

function run() {
    const bucket = core.getInput("bucket", { required: true });
    const bucketRegion = core.getInput("bucket-region", { required: true });
    const distFolder = core.getInput("dist-folder", { required: true });

    core.notice("Hello from custom JS!!!");
    core.notice("bucket: ${bucket}, bucket-region: ${bucketRegion}, dist-folder: ${distFolder}");
}

run();