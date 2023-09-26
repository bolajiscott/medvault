import { patient } from "../models/patient.mjs";
import { validationResult } from "express-validator";
import { retrieveRecord, uploadToweb3Storage } from "../vendor/web3Storage.mjs";
const web3URL = process.env.WER3URL;
const web3Token = process.env.WEB3TOKEN;

export const UploadPatientRecord = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const data = req.body;
  const userData = {
    fullName: data?.fullName,
    diagnosis: data?.diagnosis,
    email: data?.email,
    diseases: data?.diseases,
  };
  const fileBuffer = req.file?.buffer;
  if (!fileBuffer) {
    res.status(400).json({
      message: "Patient medical record file was not uploaded",
    });
    return;
  }

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
export const RetrievePatientRecord = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const data = req.body;

  const patientExist = await patient.findOne({ email: data.email });
  if (patientExist === null) {
    res.status(400).json({
      message: "Patients record does not exist",
    });
    return;
  }

  const cid = patientExist.web3CID;

  const file = await retrieveRecord(cid);
  if (!file) {
    res.status(200).json({
      message: "Unable to retrieve patient file",
    });
    return;
  }

  res.status(200).json({
    message: "Patient record retrieved successfully",
    data: {
      fullName: patientExist.fullName,
      diagnosis: patientExist.diagnosis,
      diseases: patientExist.diseases,
      file: {},
    },
  });
};

export const RetrieveAllRecords = async (req, res) => {
  const patients = await patient.find();
  if (patients.length === 0) {
    res.status(404).json({
      message: "No record found",
    });
  }

  res.status(200).json({
    message: "All records",
    data: {
      patients,
    },
  });
};
