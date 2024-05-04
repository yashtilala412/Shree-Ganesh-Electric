const CategorytModel = require("../category/category.model");

exports.createCategory = async (name, description, status) => {
  const category = new CategorytModel({
    name,
    description,
    status,
  });
  return await category.save();
};

exports.findAllCategory = async () => {
  return await CategorytModel.find();
};

exports.findCategoryByname = async (name) => {
  const condition = name
    ? { name: { $regex: new RegExp(name), $options: "i" } }//i means not case sensitive
    : {};
  return await CategorytModel.find(condition);
};

exports.findCategoryById = async (id) => {
  return await CategorytModel.findById(id);
};

exports.updateCategory = async (id, updateData) => {
  return await CategorytModel.findByIdAndUpdate(id, updateData, {
    useFindAndModify: false,
  });
};

exports.deleteCategory = async (id) => {
  return await CategorytModel.findByIdAndRemove(id);
};
