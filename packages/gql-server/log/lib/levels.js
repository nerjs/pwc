module.exports = {
    warn: {
        color: 'yellow',
        show: process.env.NODE_ENV != 'production',
    },
    info: {
        color: 'green',
        show: true,
    },
    debug: {
        color: 'magenta',
        show: process.env.NODE_ENV != 'production',
    },
    error: {
        color: 'red',
        show: true,
    },
    time: {
        color: 'yellow',
        show: process.env.NODE_ENV != 'production',
    },
    table: {
        show: process.env.NODE_ENV != 'production',
    },
}
