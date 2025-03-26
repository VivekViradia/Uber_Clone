const userModel = require("../models/user.model");

module.exports.createUser = async ({fullName, email, password}) => {
    const { firstName, lastName } = fullName;
    console.log('LOGSSSS: ',firstName, lastName, email, password);
    if(!firstName || !lastName || !email || !password) {
        throw new Error("All fields are required");
    }
    const user = await userModel.create({ fullName, email, password });

    return user;
};
