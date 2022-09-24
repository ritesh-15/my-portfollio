import rateLimit from "express-rate-limit";
import ApiHttpError from "./api_http_error";

const rateLimiter = rateLimit({
  windowMs: 60 * 15 * 100,
  max: 200,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res, next) => {
    return next(ApiHttpError.toManyRequest());
  },
});

export default rateLimiter;
