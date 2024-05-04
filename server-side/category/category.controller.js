const categoryService = require("../category/category.service");

exports.create = async (req, res) => {
  let status = true;
  const { name, description } = req.body;
  if (!name || !description || !status) {
    return res.status(400).json({ message: "Fields are empty" });
  }

  try {
    const category = await categoryService.createCategory(name, description, status);
    res.status(201).json({ message: "Category added successfully", category });
  } catch (err) {
    console.error("Error creating Category:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.findAll = async (req, res) => {
  try {
    const category = await categoryService.findAllCategory();
    res.send({ message: "Category data", category });
  } catch (err) {
    console.error("Error fetching Category:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

