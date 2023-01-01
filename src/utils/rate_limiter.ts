import rateLimit from "express-rate-limit"
import CreateHttpError from "./create_http_error"

const rateLimiter = rateLimit({
  windowMs: 1000 * 60 * 30,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res, next) => {
    return next(CreateHttpError.toManyRequest())
  },
})

const authRateLimiter = rateLimit({
  windowMs: 1000 * 60 * 15,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res, next) => {
    return next(CreateHttpError.toManyRequest())
  },
})

export default rateLimiter
