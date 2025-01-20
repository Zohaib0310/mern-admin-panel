// In ExpressJS, express.Router() is a mini express application witthout all the server configurations but with the ability to define routes.
// We use express.Router class to create modular and mountable route handlers. A Router instance is a complete middleware and routing system; for this reason it is often referred to "mini-app"

const express = require("express");
const router = express.Router();
const { home, register } = require("../controllers/auth");

router.get("/", home);

router.get("/register", register);

module.exports = router;
