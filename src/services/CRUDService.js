import bcrypt from "bcryptjs";
import db from "../models/index";
var salt = bcrypt.genSaltSync(10);
let createNewuser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPasswordFromBcrypt = await hashUserPassword(data.password);
      await db.User.create({
        email: data.email,
        password: hashPasswordFromBcrypt,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        phonenuber: data.phonenuber,
        gender: data.gender === "1" ? true : false,
        roleId: data.roleId,
      });

      resolve("successfully create new user");
    } catch (e) {
      reject(e);
    }
  });
};

let hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      var hashPassword = await bcrypt.hashSync("password", salt);
      resolve(hashPassword);
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createNewuser: createNewuser,
};
