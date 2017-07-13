'use strict'
const pug = require('pug')
const fs  = require('fs')
let fn  = pug.compileFile(__dirname + '/views/index.pug')
let h = fn()
fs.writeFileSync(__dirname + '/index.html', h)