import rateLimit from "express-rate-limit";
import CreateHttpError from "./create_http_error";

const rateLimiter = rateLimit({
  windowMs: 60 * 15 * 100,
  max: 200,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res, next) => {
    return next(CreateHttpError.toManyRequest());
  },
});

export default rateLimiter;
