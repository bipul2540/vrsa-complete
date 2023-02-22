import rateLimit from "express-rate-limit";

export const apiLimiter = rateLimit({
  windowMs: 60 * 1000, //1 min
  max: 1, // 1 request permin
  message: "Too many request from this IP, please try after 1 min",
});
