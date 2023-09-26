import Router from "express";
import multer from "multer";
import {
  RetrievePatientRecord,
  UploadPatientRecord,
} from "../controller/patient.mjs";
import { MethodNotAllowed } from "../middleware/index.mjs";

const router = Router();
const upload = multer();

router
  .route("/")
  .post(upload.single("file"), UploadPatientRecord)
  .all(MethodNotAllowed);
router.route("/").get(RetrievePatientRecord).all(MethodNotAllowed);

export default router;
