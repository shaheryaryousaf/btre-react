import asyncHandler from "../middleware/asyncHandler.js";
import Realtor from "../models/Realtor.js";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

// Configure multer storage for Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "listings", // Optional: specify a folder in your Cloudinary account
    allowed_formats: ["jpg", "png", "jpeg"],
    transformation: [{ width: 800, height: 600, crop: "limit" }],
  },
});

const upload = multer({ storage: storage });

// ====================================
// Get All Realtors
// ====================================
const getAllRealtors = asyncHandler(async (req, res) => {
  const realtors = await Realtor.find({})
    .sort({ createdAt: -1 }) // sorting here
    .lean();

  if (!realtors) next({ status: 500, message: "Something went wrong" });

  res.status(200).json({ realtors });
});

// ====================================
// Get Single Realtor
// ====================================
const getSingleRealtor = asyncHandler(async (req, res) => {
  const realtor = await Realtor.findById(req.params.id).lean();
  if (!realtor) {
    res.status(401);
    throw new Error("Realtor doens't Exist");
  }
  res.status(200).json(realtor);
});

// ====================================
// Add New Realtor
// ====================================
const addNewRealtor = asyncHandler(async (req, res) => {
  const { name, email, phone_number, bio, is_mvp } = req.body;

  // Check if file is uploaded
  if (!req.file) {
    return res.status(400).json({ error: "Image is required" });
  }

  const image = req.file.path; // Get image path from Cloudinary

  try {
    const realtor = await Realtor.create({
      name,
      email,
      phone_number,
      bio,
      image,
      is_mvp,
      addedBy: req.user._id,
    });

    const savedListing = await realtor.save();
    res.status(200).json({ message: "New realtor has been saved" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error adding realtor" });
  }
});

// ====================================
// Delete Realtor
// ====================================
const deleteRealtor = asyncHandler(async (req, res) => {
  try {
    const result = await Realtor.deleteOne({
      _id: req.params.id,
    });

    if (result.deletedCount === 0) {
      res.status(404).json({ message: "Realtor not found or already deleted" });
      return;
    }

    res.status(200).json({ message: "Realtor deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete realtor", message: error.message });
  }
});

// ====================================
// Update Realtor
// ====================================
const updateRealtor = asyncHandler(async (req, res) => {
  const { name, email, phone_number, bio, is_mvp } = req.body;

  try {
    // Check if a new image is uploaded
    let image;
    if (req.file) {
      image = req.file.path; // Get image path from Cloudinary
    }

    // Use findByIdAndUpdate to update the listing
    const updatedRealtor = await Realtor.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          name,
          email,
          phone_number,
          bio,
          is_mvp,
          image,
        },
      },
      { new: true, runValidators: true } // Options to return the updated document and run validators
    );

    if (!updatedRealtor) {
      res.status(404); // Use 404 status for not found
      throw new Error("No realtor found.");
    }

    res.status(200).json({
      message: "Realtor has been updated",
      data: updatedRealtor,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update listing" });
  }
});

export {
  getAllRealtors,
  getSingleRealtor,
  addNewRealtor,
  deleteRealtor,
  updateRealtor,
  upload,
};
