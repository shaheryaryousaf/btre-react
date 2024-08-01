import asyncHandler from "../middleware/asyncHandler.js";
import Listing from "../models/Listing.js";

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
    image,
    description,
  } = req.body;

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
    image,
    description,
  });

  try {
    const savedListing = await listing.save();
    res.status(200).json({ message: "New listing has been saved" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error adding employee" });
  }
});

export { addNewListing };
