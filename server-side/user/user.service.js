const UserModel = require("../user/user.model");

exports.createUser = async (name, email, password) => {
  let status="active";
  let verified = false;
  const user = new UserModel({
    name,
    email,
    password,
    status,
    verified
  });
  return await user.save();
};

exports.findAllUsers = async () => {
  return await UserModel.find();
};