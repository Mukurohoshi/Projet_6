const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
      max: 5,
      message:
          "Vous avez effectué plus de 20 loggin, veuillez attendre 15 minutes!",
      headers: true,
});

module.exports = limiter;