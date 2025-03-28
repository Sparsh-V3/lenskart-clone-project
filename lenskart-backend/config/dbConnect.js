const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connection to database established successfully.");
  } catch (error) {
    console.error("Internal server encountered : ", error.message);
    process.exit(1);
  }
};

module.exports = dbConnect;
