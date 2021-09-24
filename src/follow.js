const { Octokit } = require("@octokit/core");
require('dotenv').config();
const fs = require("fs");

(async () => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_PERSONAL_TOKEN,
  });
  const fileName = process.argv[2] || "example";
  const unparsedUsers = fs.readFileSync(`../data/${fileName}.json`);
  const users = JSON.parse(unparsedUsers);

  for (let index = 0; index < users.length; index++) {
    const username = users[index];

    const data = await octokit.request("PUT /user/following/{username}", {
      username,
    });

    data.status === 204 &&
      console.log(`${index} - ${username} has been followed successfully`);
  }
})();
