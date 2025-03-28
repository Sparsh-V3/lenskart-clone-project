const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: {
      type: String,
      required: [true, "Phone number is required"],
      validate: {
        validator: function (value) {
          return /^[6-9]\d{9}$/.test(value); // Validates Indian 10-digit numbers starting with 6-9
        },
        message: "Invalid phone number format",
      },
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      validate: {
        validator: function (value) {
          return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
        },
        message: "Invalid email format",
      },
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      validate: {
        validator: function (value) {
          return /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
            value
          );
        },
        message:
          "Password must be at least 8 characters, include one uppercase letter, one number, and one special character",
      },
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// **Pre-save Hook to Hash Password Before Storing in DB**
userSchema.pre("save", async function (next) {
  const saltRounds = Number(process.env.SALT_ROUNDS);
  if (!this.isModified("password")) return next(); // Only hash if password is modified
  this.password = await bcrypt.hash(this.password, saltRounds);
  next();
});

// Custom method to compare passwords
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
