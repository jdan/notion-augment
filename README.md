## notion-augment

Augment your [Notion](https://notion.so) databases on command, à la [Man-Computer Symbiosis](https://en.wikipedia.org/wiki/Man-Computer_Symbiosis).

### usage

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
    // https://developers.notion.com/reference/patch-page
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

![augment](https://user-images.githubusercontent.com/287268/132866840-b65e67b8-e844-4acd-8558-0547b2e4eef2.gif)
