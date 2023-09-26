import axios from "axios";
import formdata from "form-data";
import fs from "fs";
import { patient } from "../models/patient.mjs";
import { uploadToweb3Storage } from "../vendor/web3Storage.mjs";
const web3URL = process.env.WER3URL;
const web3Token = process.env.WEB3TOKEN;

export const UploadPatientRecord = async (req, res) => {
  const data = req.body;
  const userData = {
    fullName: data?.fullName,
    diagnosis: data?.diagnosis,
    email: data?.email,
    diseases: data?.diseases,
  };
  const fileBuffer = req.file.buffer;

  const patientExist = await patient.findOne({ email: data.email });
  if (patientExist !== null) {
    res.status(400).json({
      message: "Patients record already exist",
    });
    return;
  }

  const cid = await uploadToweb3Storage(fileBuffer, userData);
  if (!cid) {
    res.status(400).json({
      message: "Unable to store patient record to web3.storage",
    });
    return;
  }

  const patientRecord = {
    fullName: data?.fullName,
    email: data?.email,
    diagnosis: data?.diagnosis,
    diseases: data?.diseases,
    web3CID: cid,
  };

  const patientData = new patient(patientRecord);

  await patientData.save((error, savedEntry) => {
    if (error) {
      res.status(500).json({
        message: "Unable to save user record",
        data: {
          storageId: cid,
        },
      });
      return;
    }
  });

  res.status(201).json({
    message: "Record Saved Sucessfully",
    data: {
      storageId: cid,
    },
  });
};
export const RetrievePatientRecord = (req, res) => {};
