import mongoose from "mongoose";

const { Schema } = mongoose;

const patientSchema = new Schema({
  fullName: { type: String, required: true },
  email: {
    type: String,
    required: true,
  },
  diagnosis: { type: String, required: true },
  diseases: { type: String, required: true },
  web3CID: { type: String, required: true },
});

export const patient = mongoose.model("patient", patientSchema);
