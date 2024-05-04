const ProductModel = require("../product/product.model");

exports.createProduct = async (name, description, image,price,stockQuantity,categoryId) => {
  let status=true;
  const product = new ProductModel({
    name,
    description,
    image,
    status,
    price,
    stockQuantity,
    categoryId
  });
  return await product.save();
};

exports.findAllProducts = async () => {
  return await ProductModel.find();
};

exports.findProductsByname = async (name) => {
  const condition = name
    ? { name: { $regex: new RegExp(name), $options: "i" } }//i means not case sensitive
    : {};
  return await ProductModel.find(condition);
};

exports.findProductById = async (id) => {
  return await ProductModel.findById(id);
};

exports.updateProduct = async (id, updateData) => {
  return await ProductModel.findByIdAndUpdate(id, updateData, {
    useFindAndModify: false,
  });
};

exports.deleteProduct = async (id) => {
  return await ProductModel.findByIdAndRemove(id);
};
