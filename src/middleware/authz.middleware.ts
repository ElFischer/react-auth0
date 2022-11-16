var { expressjwt: jwt } = require("express-jwt")
import jwksRsa from "jwks-rsa";
import * as dotenv from "dotenv";

dotenv.config();

export const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://devsrow.eu.auth0.com/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: 'https://menu-api.example.com',
  issuer: `https://devsrow.eu.auth0.com/`,
  algorithms: ["RS256"]
});