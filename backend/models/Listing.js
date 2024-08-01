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
      type: number,
      required: true,
    },
    bedrooms: {
      type: number,
      required: true,
    },
    bathrooms: {
      type: number,
      required: true,
    },
    garage: {
      type: number,
      required: true,
    },
    square_feet: {
      type: number,
      required: true,
    },
    lot_size: {
      type: number,
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
  },
  {
    timestamps: true,
  }
);

const Listing = mongoose.model("Listing", listingSchema);
export default Listing;
