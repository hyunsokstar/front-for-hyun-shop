export const saveTokenToLocalStorage = (token: string) => {
  localStorage.setItem("accessToken", token);
};

// 토큰 불러오는 함수 예시
export const getAccessTokenFromLocalStorage = () => {
  return localStorage.getItem("accessToken");
};

// 토큰 삭제 함수
export const removeTokenFromLocalStorage = () => {
  localStorage.removeItem("accessToken");
};