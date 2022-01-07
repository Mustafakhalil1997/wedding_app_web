const Invitee = require("../models/invitee");

const getInvitees = async (req, res) => {
  try {
    const invitees = await Invitee.find({}).exec();
    console.log("invitees ", invitees);
    res.status(200).json({ invitees });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const addInvitee = async (req, res) => {
  console.log("adding invitee");
  try {
    const invitee = await Invitee.create(req.body);

    res.status(200).json({ invitee });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = { getInvitees, addInvitee };
