import AxiosInstance from "../../../http/AxiosInstance";

const AuthHttp = {
  getToken: params => AxiosInstance.post("/auth/login", params)
}

export default AuthHttp;
