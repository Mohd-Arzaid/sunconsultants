import { Test } from "../models/test.model.js";

export const createTest = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({
        message: "Name is required",
        success: false,
      });
    }

    // check if test already exists
    const existingTest = await Test.findOne({ name });
    if (existingTest) {
      return res.status(401).json({
        success: false,
        message: "Test Already Exists. Please try with a different name.",
      });
    }

    // create new test
    const test = await Test.create({ name });
    return res.status(201).json({
      success: true,
      test,
      message: "Test created successfully",
    });
  } catch (error) {
    console.error("Error while creating test : ", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while creating test. Please try again.",
    });
  }
};
