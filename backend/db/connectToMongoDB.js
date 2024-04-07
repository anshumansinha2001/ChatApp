import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose
      .connect(process.env.MONGOOSE_URI)
      .then(() => {
        console.log("Sucessfully Connected to Database!");
      })
      .catch((err) => console.log("Failed to Connect DB!", err.message));
  } catch (error) {
    console.log(error);
  }
};

export default connectToMongoDB;
