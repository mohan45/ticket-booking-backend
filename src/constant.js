'use strict';
export default Object.freeze({
    MONGODB_URL: "mongodb://127.0.0.1:27017/ticket-booking",
    PORT: 3000,
    RESPONSE: {
        ERROR: {
            STATUS: 500,
            MESSAGE: 'Internal server error'
        },
        BAD_REQUEST: {
            STATUS: 400,
        },
        OK: {
            STATUS: 200,
            MESSAGE: 'Success'
        },
        UNAUTHORIZED: {
            STATUS: 401,
        }
    },
    SALT_WORK_FACTOR: 12,
    JWT_SUPER_SECRET: 'kajsgfkwserfaaljrgijksanrkgjirit8928fj94owigjswr98gfj3ifgjelvjfio02v',
});
