const forEachRow = require("notion-for-each-row");

module.exports = function (options, cb) {
  forEachRow(options, async (row, notion) => {
    await notion.pages.update({
      page_id: row.id,
      properties: cb(row),
    });
  });
};
