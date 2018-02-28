const seude = require('../src/index.js')

test('loading environment', () => {
    expect(seude).toThrowError('A environment string needs to be set')
    expect(seude('test')).toEqual({
        DATABASE: "mongodb://localhost:27017/test",
        BACKEND_ENDPOINT: "http://localhost:3000/"
    })
})