import auth0 from "auth0-js"

const env = require('dotenv').config()

class Auth {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: env.AUTH0_DOMAIN,
      audience: `https://${env.AUTH0_DOMAIN}/userinfo`,
      clientID: env.AUTH0_CLIENT_ID,
      redirectUri: 'http://localhost:3000/callback',
      responseType: 'id_token',
      scope: 'openid profile'
    })
  }
}