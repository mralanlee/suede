# Seude
---
Seude is a module, inspired by [dotenv](https://github.com/motdotla/dotenv), for loading environment variables from a `seude.env.json` file into `process.env`. The difference is that you must declare the environment for the imported function so that it could do a lookup in the JSON file to load any required environment variables.

## Install
---
`npm install seude  `
or
`yarn add seude`

Create a seude.env.json file and add specific variables needed in JSON relative to the root property.

Example:
```json
{
    "test": {
        "DATABASE": "mongodb://localhost:27017/test",
        "BACKEND_ENDPOINT": "http://localhost:3000/"
    },
    "qa": {
        "DATABASE": "mongodb://localhost:27017/test",
        "BACKEND_ENDPOINT": "http://localhost:3000/"
    },
    "production": {
        "DATABASE": "mongodb://localhost:27017/test",
        "BACKEND_ENDPOINT": "http://localhost:3000/"
    }
}
```

It's that simple.

```js
const mongoose = require('mongoose')
const seude = require('seude')

seude('test')
mongoose.connect(process.env.DATABASE)

```

## Reason
The reason for building another environment variable manager is to help manage multiple environments and to simplify testing variables in different in environments.