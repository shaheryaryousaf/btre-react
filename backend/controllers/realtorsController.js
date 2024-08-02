import asyncHandler from "../middleware/asyncHandler.js";
import Realtor from "../models/Realtor.js";

// ====================================
// Get All Realtors
// ====================================
const getAllRealtors = asyncHandler(async (req, res) => {
  const { page = 1, limit = 50 } = req.query;
  const realtors = await Realtor.find({})
    .sort({ createdAt: -1 }) // sorting here
    .skip((page - 1) * limit)
    .limit(limit)
    .lean();

  if (!realtors) next({ status: 500, message: "Something went wrong" });

  const totalRealtorsCount = await Realtor.countDocuments({});
  const totalRealtorPages = Math.ceil(totalRealtorsCount / limit);

  res.status(200).json({ realtors, totalRealtorPages });
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
  const { name, email, phone_number, image, bio, is_mvp } = req.body;

  const realtor = await Realtor.create({
    name,
    email,
    phone_number,
    image,
    bio,
    is_mvp,
  });

  try {
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
  const { name, email, phone_number, image, bio, is_mvp } = req.body;

  const realtor = await Realtor.findOne({
    _id: req.params.id,
  });

  if (!realtor) {
    res.status(400);
    throw new Error("No realtor found.");
  }

  if (
    name === "" ||
    email === "" ||
    phone_number === "" ||
    email === "" ||
    image === "" ||
    is_mvp === ""
  ) {
    res.status(400);
    throw new Error("Please fill all required fields");
  } else {
    realtor.name = name !== "" && name ? name : realtor.name;
    realtor.email = email !== "" && email ? email : realtor.email;
    realtor.phone_number = phone_number !== "" && phone_number ? phone_number : realtor.phone_number;
    realtor.image = image !== "" && image ? image : realtor.image;
    realtor.bio = bio !== "" && bio ? bio : realtor.bio;
    realtor.is_mvp = is_mvp !== "" && is_mvp ? is_mvp : realtor.is_mvp;

    try {
      realtor.save();
      res
        .status(200)
        .json({ message: "Realtor has been updated", data: realtor });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Failed to update realtor" });
    }
  }
});

export {
  getAllRealtors,
  getSingleRealtor,
  addNewRealtor,
  deleteRealtor,
  updateRealtor,
};
