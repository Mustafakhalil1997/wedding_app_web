const mongoose = require("mongoose");

const inviteeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  checkIn: { type: String, default: "" },
});

module.exports = mongoose.model("Invitee", inviteeSchema);
