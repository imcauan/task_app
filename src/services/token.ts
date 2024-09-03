import Cookies from "js-cookie";

export class TokenService {
  static readonly keyAccessToken = "access_token_wang";

  static saveAccessToken(token: string) {
    return Cookies.set(this.keyAccessToken, token);
  }

  static getAccessToken() {
    return Cookies.get(this.keyAccessToken);
  }

  static removeToken() {
    return Cookies.remove(this.keyAccessToken);
  }

  static hasAccessToken() {
    return !!this.getAccessToken();
  }
}
