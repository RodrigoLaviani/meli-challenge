module.exports = {
    get: jest.fn((url) => {
        if (url === '/something') {
            return Promise.resolve({
                data: 'data'
            });
        }
    }),
    create: jest.fn(function () {
        return this;
    })
};