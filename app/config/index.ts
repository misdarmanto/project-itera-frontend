export const CONFIG = {
  env: process.env.NODE_ENV || "development",
  authorization: {
    username: process.env.AUTHORIZATION_USERNAME || "itera",
    passsword: process.env.AUTHORIZATION_PASSWORD || "secret",
  },
  asset: {
    authorization: {
      username: process.env.AUTHORIZATION_ASSET_USERNAME || "itera_assets",
      passsword: process.env.AUTHORIZATION_ASSET_PASSWORD || "itera_assets",
    },
  },
  session: {
    secret: process.env.SESSION_SECRET || "itera-session-secret",
    name: process.env.SESSION_NAME || "itera",
  },
  base_url_api: {
    default: process.env.BASE_URL_API_DEFAULT || "http://localhost:6001",
  },
};
