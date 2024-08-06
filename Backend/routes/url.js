const express = require("express");
const { handleGenerateURL,handleSendContent } = require("../controller/urlController");
const router = express.Router();

router.route("/")
    .post(handleGenerateURL)
router.route("/:shortId").get(handleSendContent);


module.exports = router