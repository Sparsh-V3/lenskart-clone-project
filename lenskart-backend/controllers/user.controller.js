const UserModel = require("../models/user.model");
const generateToken = require("../utils/jwt.utils.js");

const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password, phoneNumber } = req.body;

    // Check if user already exists
    let user = await UserModel.findOne({ email });
    if (user) return res.status(400).json({ message: "Email already in use" });

    // Create new user (password gets hashed automatically in model)
    user = await UserModel.create({
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
    });

    // Generate JWT token
    const token = generateToken(user._id);

    // Set token in HTTP-only cookie
    res.cookie("authToken", token, {
      httpOnly: true,
      secure: false, // true in production, false in development
      sameSite: "Lax",
      maxAge: 24 * 60 * 60 * 1000, // Expires in 1 day
    });

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", Error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Use the model's comparePassword method
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = generateToken(user._id);

    // Set token in HTTP-only cookie
    res.cookie("authToken", token, {
      httpOnly: true,
      secure: false, // true in production, false in development
      sameSite: "Lax",
      maxAge: 24 * 60 * 60 * 1000, // Expires in 1 day
    });

    // Successful login response
    res.status(200).json({ message: "Login successful!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { signup, login };
