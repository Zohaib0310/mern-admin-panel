const express = require("express");
const app = express();
const PORT = process.env.PORT || 5001;

app.get("/", (request, response) => {
  response.status(200).send({ message: "Hello World" });
});

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});
