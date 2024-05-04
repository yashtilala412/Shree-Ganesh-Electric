const productService = require("../product/product.service");

exports.create = async (req, res) => {
  const { name, description, image,price,stockQuantity,categoryId } = req.body;
  if (!name || !description || !image || !price || !stockQuantity || !categoryId) {
    return res.status(400).json({ message: "Fields are empty" });
  }

  try {
    const product = await productService.createProduct(name, description, image,price,stockQuantity,categoryId);
    res.status(201).json({ message: "Product added successfully", product });
  } catch (err) {
    console.error("Error creating Product:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.findAll = async (req, res) => {
  try {
    const products = await productService.findAllProducts();
    res.send({ message: "Product data", products });
  } catch (err) {
    console.error("Error fetching Product:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};


// exports.update = async (req, res) => {
//   const id = req.params.id;
//   const updateData = req.body;
//   try {
//     const result = await productService.updateBlog(id, updateData);
//     if (!result) {
//       return res.status(400).json({ message: "No Product found with id: " + id });
//     }
//     res.json({ message: "Prouct updated successfully" });
//   } catch (err) {
//     console.error("Error updating blog:", err);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

// exports.delete = async (req, res) => {
//   const id = req.params.id;
//   try {
//     const result = await productService.deleteBlog(id);
//     if (!result) {
//       return res.status(400).json({ message: "No blog found with id: " + id });
//     }
//     res.json({ message: "Blog deleted successfully" });
//   } catch (err) {
//     console.error("Error deleting blog:", err);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };
