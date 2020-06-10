require('dotenv').config();

export default {
    // API_ENDPOINT: 'https://thinkful-whatdo.herokuapp.com/api',
    // API_ENDPOINT: "http://localhost:8000/api",
    // REACT_APP_API_ENDPOINT: "http://localhost:8000/api",
    // TOKEN_KEY: "dev-client-auth-token",
    REACT_APP_API_ENDPOINT:
      process.env.REACT_APP_API_ENDPOINT // ||
      // 'http://localhost:8000/api'
      ,
    REACT_APP_TOKEN_KEY:
      process.env.REACT_APP_TOKEN_KEY || "dev-client-auth-token",
}