import axios from "axios";
import { CONFIG } from "~/config";
import { CONSOLE } from "~/utilities/log";

export const getHeaders = (session: any) => {
  return {
    "x-user-id": session?.user_id || "",
  };
};

export const API = {
  get: async (session: any, url: string, headers?: any) => {
    try {
      const result = await axios.get(url, {
        auth: { username: CONFIG.authorization.username, password: CONFIG.authorization.passsword },
        headers: { ...getHeaders(session), ...headers },
      });
      return result.data.data;
    } catch (error: any) {
      CONSOLE.log(error);
      throw {
        code: error.response.status,
        message: error.response
          ? error.response.data.error_message
          : "Tidak dapat memproses permintaan. Ulangi beberapa saat lagi.",
      };
    }
  },

  post: async (session: any, url: string, body: any, headers?: any) => {
    try {
      const result = await axios.post(url, body, {
        auth: { username: CONFIG.authorization.username, password: CONFIG.authorization.passsword },
        headers: { ...getHeaders(session), ...headers },
      });
      return result.data;
    } catch (error: any) {
      CONSOLE.log(error);
      throw {
        code: error.response.status,
        message: error.response
          ? error.response.data.error_message
          : "Tidak dapat memproses permintaan. Ulangi beberapa saat lagi.",
      };
    }
  },

  patch: async (session: any, url: string, body: any, headers?: any) => {
    try {
      const result = await axios.patch(url, body, {
        auth: { username: CONFIG.authorization.username, password: CONFIG.authorization.passsword },
        headers: { ...getHeaders(session), ...headers },
      });
      return result.data;
    } catch (error: any) {
      CONSOLE.log(error);
      throw {
        code: error.response.status,
        message: error.response
          ? error.response.data.error_message
          : "Tidak dapat memproses permintaan. Ulangi beberapa saat lagi.",
      };
    }
  },

  delete: async (session: any, url: string, headers?: any) => {
    try {
      const result = await axios.delete(url, {
        auth: { username: CONFIG.authorization.username, password: CONFIG.authorization.passsword },
        headers: { ...getHeaders(session), ...headers },
      });
      return result.data;
    } catch (error: any) {
      CONSOLE.log(error);
      throw {
        code: error.response.status,
        message: error.response
          ? error.response.data.error_message
          : "Tidak dapat memproses permintaan. Ulangi beberapa saat lagi.",
      };
    }
  },
};
