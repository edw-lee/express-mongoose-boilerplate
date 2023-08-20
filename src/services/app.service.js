import { Temp } from "../models/temp.model.js";

export const get = async () => {
    try {
        const results = await Temp.findOne();

        return results;
    } catch (error) {
        throw error;
    }
}

export const post = async () => {
    try {
        const results = await new Temp().save();

        return results;
    } catch (error) {
        throw error;
    }
}

export const put = async () => {
    try {
        const results = await Temp.updateOne();

        return results;
    } catch (error) {
        throw error;
    }
}

export const _delete = async () => {
    try {
        const results = await Temp.deleteOne();

        return results;
    } catch (error) {
        throw error;
    }
}