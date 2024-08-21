const express = require("express");
const path = require("path");
const { PORT } = require("./config.js");
const cors = require("cors");

let app = express();
app.use(express.static("wwwroot"));
app.use(express.static(path.join(__dirname, "wwwroot")));
app.use(cors());
app.use(require("./routes/auth.js"));
app.use(require("./routes/models.js"));
app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}...`);
});
