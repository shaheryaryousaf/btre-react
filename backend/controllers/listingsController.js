import asyncHandler from "../middleware/asyncHandler.js";
import Listing from "../models/Listing.js";

// ====================================
// Get All Listings
// ====================================
const getAllListings = asyncHandler(async (req, res) => {
  const { page = 1, limit = 50 } = req.query;
  const listings = await Listing.find({})
    .sort({ createdAt: -1 }) // sorting here
    .skip((page - 1) * limit)
    .limit(limit)
    .lean();

  if (!listings) next({ status: 500, message: "Something went wrong" });

  const totalListingsCount = await Listing.countDocuments({});
  const totalListingPages = Math.ceil(totalListingsCount / limit);

  res.status(200).json({ listings, totalListingPages });
});

// ====================================
// Get Single Listing
// ====================================
const getSingleListing = asyncHandler(async (req, res) => {
  const listing = await Listing.findById(req.params.id).lean();
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
    image,
    description,
    realtor,
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
    realtor,
    addedBy: req.user._id,
  });

  try {
    const savedListing = await listing.save();
    res.status(200).json({ message: "New listing has been saved" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error adding employee" });
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
    image,
    description,
    realtor,
  } = req.body;

  const listing = await Listing.findOne({
    _id: req.params.id,
  });

  if (!listing) {
    res.status(400);
    throw new Error("No listing found.");
  }

  listing.title = title;
  listing.street_address = street_address;
  listing.city = city;
  listing.state = state;
  listing.zip = zip;
  listing.price = price;
  listing.bedrooms = bedrooms;
  listing.bathrooms = bathrooms;
  listing.garage = garage;
  listing.square_feet = square_feet;
  listing.lot_size = lot_size;
  listing.image = image;
  listing.description = description;
  listing.realtor = realtor;

  try {
    const saveListing = await listing.save();
    res
      .status(200)
      .json({ message: "Listing has been updated", data: saveListing });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to update listing" });
  }
});

export {
  getAllListings,
  getSingleListing,
  addNewListing,
  deleteListing,
  updateListing,
};
