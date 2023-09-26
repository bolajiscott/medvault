import Router from "express";
import {
  RetrievePatientRecord,
  UploadPatientRecord,
} from "../controller/patient.mjs";
import { MethodNotAllowed } from "../middleware/index.mjs";

const router = Router();

router.route("/").post(UploadPatientRecord).all(MethodNotAllowed);
router.route("/").get(RetrievePatientRecord).all(MethodNotAllowed);

export default router;
