const express = require("express")
const router = express.Router()
const {handleGetUser,
    handleCreateNewUser,
    handleUserLogin } = require("../controller/new_user_controller")

router.route("/").get(handleGetUser)
                 .post(handleUserLogin);

router.route("/newuser")
      .post(handleCreateNewUser)


module.exports = router;