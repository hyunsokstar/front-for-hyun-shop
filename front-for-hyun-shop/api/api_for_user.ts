import axios, { AxiosResponse } from "axios";
import { backendApi } from "./common_api";
import { QueryFunctionContext } from "@tanstack/react-query";
import Cookie from "js-cookie";
import {
  DataTypeForLoginRequest,
  ResponseTypeForLoginRequest,
  ResponseTypeForLoginCheckRequest,
} from "@/types/type_for_user";
import { getAccessTokenFromLocalStorage } from "@/lib/authentication";

const instance = axios.create({
  baseURL: `${backendApi}/api/v1/accounts/`,
  withCredentials: true,
});

// 1122
export const apiForLoginCheck =
  async (): Promise<ResponseTypeForLoginCheckRequest> => {
    const token = getAccessTokenFromLocalStorage();
    if (!token) {
      // 토큰이 없으면 로그인이 필요함을 처리
      return Promise.reject("로그인이 필요합니다.");
    }

    try {
      const response = await instance.get("user/login-check", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log("error : ", error);

      return Promise.reject("토큰이 유효하지 않습니다.");
    }
  };

export const apiForLoginWithUserName = ({
  username,
  password,
}: DataTypeForLoginRequest): Promise<ResponseTypeForLoginRequest> => {
  console.log("Username:", username);
  console.log("Password:", password);

  return instance
    .post(
      `login`,
      { username, password },
      {
        headers: {
          "X-CSRFToken": Cookie.get("csrftoken") || "",
        },
      }
    )
    .then((response) => response.data);
};

export const apiForGetUserList = ({ queryKey }: QueryFunctionContext) => {
  const [_] = queryKey;

  return instance
    .get(`user`, {
      params: {},
    })
    .then((response) => {
      return response.data;
    });
};
