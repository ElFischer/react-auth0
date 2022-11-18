var { expressjwt: jwt } = require("express-jwt")
import jwksRsa from "jwks-rsa";
import * as dotenv from "dotenv";

dotenv.config();

export const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://dev-caseos-tk100.eu.auth0.com/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  requestProperty: 'auth', 
  audience: 'https://caseos/test',
  issuer: `https://dev-caseos-tk100.eu.auth0.com/`,
  algorithms: ["RS256"]
});