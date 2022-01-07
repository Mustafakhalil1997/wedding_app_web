const express = require("express");
const router = express.Router();
const { getInvitees, addInvitee } = require("../controllers/invitees");

router.route("/").get(getInvitees).post(addInvitee);

module.exports = router;
