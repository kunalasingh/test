const Client = require("../models/Clients");

exports.register = async (req, res) => {
  try {
    const client = await Client.create(req.body);
    const token = client.getToken(client._id);
    res.status(201).json({ auth: true, token });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      message: "post clent didnt work",
      error,
    });
  }
};
