import axios, { AxiosResponse } from "axios";
import { backendApi } from "./common_api";
import { QueryFunctionContext } from "@tanstack/react-query";
import Cookie from "js-cookie";
import { DataTypeForLoginRequest, ResponseTypeForLoginRequest } from "@/types/type_for_user";

const instance = axios.create({
  baseURL: `${backendApi}/api/v1/accounts/`,
  withCredentials: true,
});

// 1122
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
