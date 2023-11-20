
export interface DataTypeForLoginRequest {
  username: string;
  password: string;
}

export interface ResponseTypeForLoginRequest {
  status: string;
  message: string;
  user_name: string;
  access_token: string;
}
