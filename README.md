## notion-augment

Augment your [Notion](https://notion.so) databases on command, a la [Man-Computer Symbiosis](https://en.wikipedia.org/wiki/Man-Computer_Symbiosis).

### running

This repo is not ready for primetime. It requires [notion-for-each-row](https://github.com/jdan/notion-for-each-row) to work. Nevertheless, here is some example code which augments a gallery with [hashart](https://hash.jordanscales.com).

```js
const augment = require("notion-augment");

require("dotenv").config();

function concatenateTitle(arr) {
  return arr.map((i) => i.text.content).join("");
}

augment(
  {
    token: process.env.NOTION_TOKEN,
    database: process.env.NOTION_DATABASE_ID,
    sorts: [],
  },
  (row) => {
    const seed = concatenateTitle(row.properties.Seed.title);
    const url = `https://hashpng.jordanscales.com/circles/685/360/${seed}.png`;
    return {
      Art: {
        files: [
          {
            type: "external",
            name: `${seed}.png`,
            external: { url },
          },
        ],
      },
    };
  }
);
```

(gif)
