import axios from "axios";
import formdata from "form-data";
import fs from "fs";
import { patient } from "../models/patient.mjs";
const web3URL = process.env.WER3URL;
const web3Token = process.env.WEB3TOKEN;

export const UploadPatientRecord = (req, res) => {
  const data = req.body;
  const form = new formdata();
  console.log(data, req);
  //   const userData = {
  //     fullName: data.fullName,
  //     diagnosis: data.diagnosis,
  //     diseases: data.diseases,
  //   };

  //   form.append("metadata", JSON.stringify(userData));
  //   form.append("file", fs.createReadStream(data.file));

  //   axios
  //     .post(web3URL, form, {
  //       headers,
  //       ...form.getHeaders(),
  //       Authorization: `Bearer ${web3Token}`,
  //     })
  //     .then((response) => {
  //       const cid = response.data.cid;
  //       console.log(cid);

  //       const data = {
  //         fullName: data.fullName,
  //         diagnosis: data.diagnosis,
  //         diseases: data.diseases,
  //         web3CID: cid,
  //       };

  //       const patientData = new patient(data);

  //       patientData.save((error, savedEntry) => {
  //         if (error) {
  //           console.log(error);
  //         } else {
  //           console.log("Saved CID in MongoDB:", savedEntry);
  //         }
  //       });
  //     })
  //     .catch((err) => {
  //       res.status(500).json({
  //         message: "Unable to save record",
  //       });
  //     });

  res.status(201).json({
    message: "Record Saved Sucessfully",
  });
};
export const RetrievePatientRecord = (req, res) => {};
