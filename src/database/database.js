import { connect } from "mongoose";
import { mongoDBConnectionString } from "../config/app.config.js";
import "../models/temp.model.js";

export const connectMongoDB = () => connect(mongoDBConnectionString);