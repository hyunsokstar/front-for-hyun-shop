
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


export interface UserInfo {
  id: number;
  username: string;
  email: string;
  created_at: string;
}

export interface UserInfo {
  id: number;
  username: string;
  email: string;
  created_at: string;
}

export interface ResponseTypeForLoginCheckRequest {
  status: string;
  message: string;
  user_info: UserInfo;
}


