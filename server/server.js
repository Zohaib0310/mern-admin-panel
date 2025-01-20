const express = require("express");
const app = express();
const router = require("./routes/auth");
const PORT = process.env.PORT || 5001;

app.use("/api/auth", router);

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});
