import Router from "express";
import multer from "multer";
import { body, validationResult } from "express-validator";
import {
  RetrievePatientRecord,
  UploadPatientRecord,
} from "../controller/patient.mjs";
import { MethodNotAllowed } from "../middleware/index.mjs";

const router = Router();
const upload = multer();

router
  .route("/")
  .post(
    upload.single("file"),
    [
      body("fullName")
        .notEmpty()
        .trim()
        .isLength({ min: 2 })
        .withMessage(
          "Patient is required and must be at least 2 characters long"
        ),
      body("diseases")
        .notEmpty()
        .trim()
        .isLength({ min: 2 })
        .withMessage(
          "Disease field is required and must be at least 2 characters long"
        ),
      body("diagnosis")
        .notEmpty()
        .trim()
        .isLength({ min: 2 })
        .withMessage(
          "Diagnosis field is required and must be at least 2 characters long"
        ),
      body("email").isEmail().withMessage("Invalid email address"),
    ],
    UploadPatientRecord
  )
  .get(
    [body("email").isEmail().withMessage("Invalid email address")],
    RetrievePatientRecord
  )
  .all(MethodNotAllowed);

export default router;
