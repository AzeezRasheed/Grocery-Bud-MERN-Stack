const express = require ('express')
const app = express()

const asyncHandler = async (fn) => {
    return (async (req, res, next) => {
        try {
          await fn(req, res, next)
          } catch (err) {
           next(e)
          }
    } )
    
}

module.exports = asyncHandler