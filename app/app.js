'use strict'

const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World v.0.0.1'))
module.exports = app
