import dotenv from 'dotenv';
import { connect } from 'mongoose';
import { exit } from 'process';
import appJson from '../datasets/app.dataset.json' assert { type: "json" };
import { Temp } from '../src/models/temp.model';

dotenv.config({ path: `.env` });

export const insertTemp = async () => {
    try {
        await connect(process.env.MONGODB_CONNECTION_STRING);

        await Temp.deleteMany();
        await Temp.insertMany(appJson);
    } catch (error) {
        console.log(error);
    }
};

export const run = () => {
    insertTemp().then(() => {
        console.log(`Insert Temps successful!`);
    }).finally(() => {
        exit(1);
    });
}