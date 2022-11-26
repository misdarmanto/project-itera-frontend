import axios from "axios";
import { CONFIG } from "~/config";
import { CONSOLE } from "~/utilities/log";

export const API = {
  get: async (url: string) => {
    try {
      const result = await axios.get(url);
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
  
  post: async (url: string, body: any, headers?: any) => {
    try {
      const result = await axios.post(url, body, {
        auth: { username: CONFIG.authorization.username, password: CONFIG.authorization.passsword },
        headers: { ...headers },
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

  patch: async (url: string, body: any, headers?: any) => {
    try {
      const result = await axios.patch(url, body, {
        auth: { username: CONFIG.authorization.username, password: CONFIG.authorization.passsword },
        headers: { ...headers },
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
  delete: async (url: string, headers?: any) => {
    try {
      const result = await axios.delete(url, {
        auth: { username: CONFIG.authorization.username, password: CONFIG.authorization.passsword },
        headers: { ...headers },
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
