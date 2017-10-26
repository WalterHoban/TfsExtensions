"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tmrm = require("vsts-task-lib/mock-run");
const path = require("path");
function setupTestRunner() {
    let taskPath = path.join(__dirname, "..", "index.js");
    let tmr = new tmrm.TaskMockRunner(taskPath);
    tmr.setInput("definitionIsInCurrentTeamProject", "false");
    tmr.setInput("tfsServer", "");
    tmr.setInput("buildDefinition", "MyBuildDefinition");
    tmr.setInput("queueBuildForUserThatTriggeredBuild", "false");
    tmr.setInput("useSameSourceVersion", "false");
    tmr.setInput("useSameBranch", "false");
    tmr.setInput("branchToUse", "");
    tmr.setInput("waitForQueuedBuildsToFinish", "false");
    tmr.setInput("waitForQueuedBuildsToFinishRefreshTime", "10");
    tmr.setInput("failTaskIfBuildsNotSuccessful", "false");
    tmr.setInput("downloadBuildArtifacts", "false");
    tmr.setInput("dropDirectory", "");
    tmr.setInput("storeInEnvironmentVariable", "true");
    tmr.setInput("demands", "");
    tmr.setInput("queueid", "");
    tmr.setInput("buildParameters", "");
    tmr.setInput("ignoreSslCertificateErrors", "false");
    tmr.setInput("authenticationMethod", "Personal Access Token");
    tmr.setInput("username", "");
    tmr.setInput("password", "myP4s5W0rd");
    tmr.setInput("enableBuildInQueueCondition", "false");
    tmr.setInput("includeCurrentBuildDefinition", "false");
    tmr.setInput("blockingBuildsList", "");
    tmr.setInput("dependentOnSuccessfulBuildCondition", "false");
    tmr.setInput("dependentBuildsList", "");
    tmr.setInput("dependentOnFailedBuildCondition", "false");
    tmr.setInput("dependentFailingBuildsList", "");
    // mock a specific module function called in task 
    tmr.registerMock("./tfsrestservice", null);
    return tmr;
}
exports.setupTestRunner = setupTestRunner;
