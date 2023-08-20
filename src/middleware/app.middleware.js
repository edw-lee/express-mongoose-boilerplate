export const middleware = async (req, res, next) => {
    try {
        return next();
    } catch (error) {
        throw error;
    }
}