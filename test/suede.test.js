const suede = require('../src/index.js')

test('loading environment', () => {
    expect(suede).toThrowError('A environment string needs to be set')
    expect(suede('test')).toEqual({
        DATABASE: "mongodb://localhost:27017/test",
        BACKEND_ENDPOINT: "http://localhost:3000/"
    })
})
