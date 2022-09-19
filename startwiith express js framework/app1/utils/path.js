const path = require("path");

// process.mainModule.filename deprecated
module.exports = path.dirname(require.main.filename).toString();
