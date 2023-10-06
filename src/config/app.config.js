import dotenv from "dotenv";

dotenv.config({ path: process.env.NODE_ENV != 'production' ? `.env.${process.env.NODE_ENV}` : '.env' });

export const port = process.env.PORT;
export const mongoDBConnectionString = process.env.MONGODB_CONNECTION_STRING;