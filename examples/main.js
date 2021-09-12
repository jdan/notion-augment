const augment = require("..");

// dotenv reads `.env`, copy `.env.example` and populate with your details
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
