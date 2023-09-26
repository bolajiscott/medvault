import Router from "express";
import {
  RetrievePatientRecord,
  UploadPatientRecord,
} from "../controller/patient";
import { MethodNotAllowed } from "../middleware";

const router = Router();

router.route("/").post(UploadPatientRecord).all(MethodNotAllowed);
router.route("/").get(RetrievePatientRecord).all(MethodNotAllowed);
