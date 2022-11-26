export const CONFIG = {
  env: process.env.NODE_ENV || "development",
  authorization: {
    username: process.env.AUTHORIZATION_USERNAME || "qwerty",
    passsword: process.env.AUTHORIZATION_PASSWORD || "Qwerty123#100%^",
  },

  base_url_api: process.env.BASE_URL_API_PROMOTION || "http://localhost:6001",
};
