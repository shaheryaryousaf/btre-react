import mongoose from "mongoose";

const realtorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: false,
      default: "",
    },
    is_mvp: {
      type: String,
      required: true,
      default: "no",
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

const Realtor = mongoose.model("Realtor", realtorSchema);
export default Realtor;
