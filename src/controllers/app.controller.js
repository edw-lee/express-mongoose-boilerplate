import * as appService from "../services/app.service.js";

export const get = async (req, res, async) => {
    try {
        const results = await appService.get();

        return res.status(200).json(results);
    } catch (error) {
        return res.status(400).json({ error });
    }
}

export const post = async (req, res, async) => {
    try {
        const results = await appService.post();

        return res.status(201).json(results);
    } catch (error) {
        return res.status(400).json({ error });
    }
}

export const put = async (req, res, async) => {
    try {
        const results = await appService.put();

        return res.status(200).json(results);
    } catch (error) {
        return res.status(400).json({ error });
    }
}

export const _delete = async (req, res, async) => {
    try {
        const results = await appService._delete();

        return res.status(200).json(results);
    } catch (error) {
        return res.status(400).json({ error });
    }
}
