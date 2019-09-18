/* eslint-disable */
const src = '../src'
const dist = '../dist'
const env = process.env.NODE_ENV || 'development'
const https = require('https')
let path = {
  build: './build',
  src: src,
  html: src + '/html',
  dist: dist
}
module.exports = {
  path: path
}
