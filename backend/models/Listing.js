import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    street_address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zip: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    bedrooms: {
      type: Number,
      required: true,
    },
    bathrooms: {
      type: Number,
      required: true,
    },
    garage: {
      type: Number,
      required: true,
    },
    square_feet: {
      type: Number,
      required: true,
    },
    lot_size: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
      default: "",
    },
    realtor: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Realtor",
    },
    addedBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Account",
    },
  },
  {
    timestamps: true,
  }
);

const Listing = mongoose.model("Listing", listingSchema);
export default Listing;
