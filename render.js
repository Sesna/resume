'use strict'
const pug = require('pug')
const fs  = require('fs')
let fn  = pug.compileFile(__dirname + '/index.pug')
let h = fn()
console.log(h)
fs.writeFileSync(__dirname + '/index.html', h)