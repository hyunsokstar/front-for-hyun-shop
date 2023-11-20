import { apiForLoginCheck } from "@/api/api_for_user";
import { ResponseTypeForLoginCheckRequest } from "@/types/type_for_user";
import { useMutation, useQuery } from "@tanstack/react-query";

interface IUser {
  // 여기에 사용자의 인터페이스를 정의해주세요
}

const useLoginCheck = () => {
  return useQuery<ResponseTypeForLoginCheckRequest>({
    queryKey: ["apiForLoginCheck"],
    queryFn: apiForLoginCheck,
  });
};

export default useLoginCheck;
