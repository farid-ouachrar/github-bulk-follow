const axios = require("axios");
const fs = require("fs");
const { exit } = require("process");

(async () => {
  const baseURL = process.argv[2];
  const fileName = process.argv[3];

  let aggregatedData = [];

  const pages = [...new Array(4)].map(
    (item, index) => `${baseURL}&page=${index + 1}`
  );

  await Promise.all(pages.map(async (u) => await axios(u))).then((item) => {
    item.map(({ data }) => aggregatedData.push(...data.data));
  });

  console.log(aggregatedData)
  let json = JSON.stringify(aggregatedData);
  fs.writeFileSync(`./${fileName}.json`, json, 'utf-8', () => {
      console.log('file created successfuly')
  });

  exit(0);
})();
