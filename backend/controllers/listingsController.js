import asyncHandler from "../middleware/asyncHandler.js";
import Listing from "../models/Listing.js";
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
// Get All Listings
// ====================================
const getAllListings = asyncHandler(async (req, res) => {
  const listings = await Listing.find({})
    .populate("realtor", "name")
    .sort({ createdAt: -1 }) // sorting here
    .lean();

  if (!listings) next({ status: 500, message: "Something went wrong" });

  res.status(200).json({ listings });
});

// ====================================
// Get Single Listing
// ====================================
const getSingleListing = asyncHandler(async (req, res) => {
  const listing = await Listing.findById(req.params.id).populate(
    "realtor",
    "name image"
  );
  if (!listing) {
    res.status(401);
    throw new Error("Listing doens't Exist");
  }
  res.status(200).json(listing);
});

// ====================================
// Add New Listing
// ====================================
const addNewListing = asyncHandler(async (req, res) => {
  const {
    title,
    street_address,
    city,
    state,
    zip,
    price,
    bedrooms,
    bathrooms,
    garage,
    square_feet,
    lot_size,
    description,
    realtor,
  } = req.body;

  // Check if file is uploaded
  if (!req.file) {
    return res.status(400).json({ error: "Image is required" });
  }

  const image = req.file.path; // Get image path from Cloudinary

  try {
    const listing = await Listing.create({
      title,
      street_address,
      city,
      state,
      zip,
      price,
      bedrooms,
      bathrooms,
      garage,
      square_feet,
      lot_size,
      image, // Store Cloudinary image URL
      description,
      realtor,
      addedBy: req.user._id,
    });

    res
      .status(200)
      .json({ message: "New listing has been saved", data: listing });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error adding listing" });
  }
});

// ====================================
// Delete Listing
// ====================================
const deleteListing = asyncHandler(async (req, res) => {
  try {
    const result = await Listing.deleteOne({
      _id: req.params.id,
    });

    if (result.deletedCount === 0) {
      res.status(404).json({ message: "Listing not found or already deleted" });
      return;
    }

    res.status(200).json({ message: "Listing deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete listing", message: error.message });
  }
});

// ====================================
// Update Listing
// ====================================
const updateListing = asyncHandler(async (req, res) => {
  const {
    title,
    street_address,
    city,
    state,
    zip,
    price,
    bedrooms,
    bathrooms,
    garage,
    square_feet,
    lot_size,
    description,
    realtor,
  } = req.body;

  try {
    // Check if a new image is uploaded
    let image;
    if (req.file) {
      image = req.file.path; // Get image path from Cloudinary
    }

    // Use findByIdAndUpdate to update the listing
    const updatedListing = await Listing.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          title,
          street_address,
          city,
          state,
          zip,
          price,
          bedrooms,
          bathrooms,
          garage,
          square_feet,
          lot_size,
          image,
          description,
          realtor,
        },
      },
      { new: true, runValidators: true } // Options to return the updated document and run validators
    );

    if (!updatedListing) {
      res.status(404); // Use 404 status for not found
      throw new Error("No listing found.");
    }

    res.status(200).json({
      message: "Listing has been updated",
      data: updatedListing,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update listing" });
  }
});

export {
  getAllListings,
  getSingleListing,
  addNewListing,
  deleteListing,
  updateListing,
  upload,
};
