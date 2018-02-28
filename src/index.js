'use strict'

const fs = require('fs')
const path = require('path')

function mediumroast(env = '') {
    if (env.length < 1 || env == null) {
        throw new Error('A environment string needs to be set')
    }

    let loaded = {}

    const seudePath = path.resolve(process.cwd(), 'medium.env.json')

    try {
        const vars = JSON.parse(fs.readFileSync(seudePath))
        
        process.env.NODE_ENV = env

        if (vars[env]) {
            for (let [x, y] of Object.entries(vars[env])) {
                process.env[x] = y
                loaded[x] = y
            }
        }
    } catch(e) {
        throw new Error(e)
    }

    return { ...loaded }
}

module.exports = mediumroast