const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Sucessfull.");
  } catch (error) {
    console.error("❌ MongoDB Failed Conection", error);
    process.exit(1);
  }
};
module.exports = connectDB;
