const userService = require("../user/user.service");

exports.create = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password   ) {
    return res.status(400).json({ message: "Fields are empty" });
  }

  try {
    const product = await userService.createUser(name, email, password);
    res.status(201).json({ message: "User added successfully", product });
  } catch (err) {
    console.error("Error creating Product:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.findAll = async (req, res) => {
  try {
    const products = await userService.findAllUsers();
    res.send({ message: "User data", products });
  } catch (err) {
    console.error("Error fetching Product:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
