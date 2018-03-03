'use strict'

const fs = require('fs')
const path = require('path')

function suede(env = '') {
    if (env.length < 1 || env == null) {
        throw new Error('A environment string needs to be set')
    }

    let loaded = {}

    const suedePath = path.resolve(process.cwd(), 'suede.env.json')

    try {
        const vars = JSON.parse(fs.readFileSync(suedePath))
        
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

module.exports = suede