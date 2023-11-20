import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
  useToast,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import { apiForLoginWithUserName } from "@/api/api_for_user";
import {
  DataTypeForLoginRequest,
  ResponseTypeForLoginRequest,
} from "@/types/type_for_user";
import { RootState } from "../../redux/store"; // RootState 추가
import {
  initializeLoginUserName,
  initialzeIsLoggedIn,
} from "../../redux/reducers/userSlice";
import { saveTokenToLocalStorage } from "@/lib/authentication";

type ModalButtonForLogInProps = {
  buttonText: string;
};

type LoginFormInputs = {
  username: string;
  password: string;
};

const ModalButtonForLogIn: React.FC<ModalButtonForLogInProps> = ({
  buttonText,
}) => {
  const toast = useToast(); // 토스트 사용을 위한 초기화
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const mutationForLogin = useMutation({
    mutationFn: apiForLoginWithUserName,
    onSuccess: (result: ResponseTypeForLoginRequest) => {
      console.log("result : ", result);
      dispatch(initializeLoginUserName(result.user_name));
      dispatch(initialzeIsLoggedIn(true));
      // localStorage.setItem("accessToken", result.access_token);
      saveTokenToLocalStorage(result.access_token);
      reset();
    },
    onError: (error: any) => {
      console.log("error.response.data.status : ", error.response.data.status);
      console.log(
        "error.response.data.message : ",
        error.response.data.message
      );

      toast({
        title: error.response.data.status, // 에러 상태를 타이틀로 설정
        description: error.response.data.message, // 에러 메시지를 설명으로 설정
        status: "error", // 에러 상태로 설정
        duration: 2000, // 2초간 표시 후 자동 닫기
        isClosable: true, // 닫기 버튼 표시
        position: "top",
      });
    },
  });

  const onSubmit = (data: DataTypeForLoginRequest) => {
    console.log(data); // Handle login logic here
    mutationForLogin.mutate({
      username: data.username,
      password: data.password,
    });
    onClose();
  };

  return (
    <>
      <Button
        variant="outline"
        border="1px"
        borderColor="black"
        size="sm"
        onClick={onOpen}
      >
        {buttonText}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="md">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box display="flex" flexDirection="column">
                <input
                  {...register("username", { required: true })}
                  placeholder="Username"
                  style={{
                    marginBottom: "16px",
                    border: "1px solid #ccc",
                    padding: "8px",
                    borderRadius: "4px",
                    outline: "none",
                  }}
                />
                {errors.username && <span>This field is required</span>}
                <input
                  type="password"
                  {...register("password", { required: true })}
                  placeholder="Password"
                  style={{
                    marginBottom: "16px",
                    border: "1px solid #ccc",
                    padding: "8px",
                    borderRadius: "4px",
                    outline: "none",
                  }}
                />
                {errors.password && <span>This field is required</span>}
                <Box display="flex" justifyContent="space-between">
                  <Button
                    type="submit"
                    variant="outline"
                    colorScheme="teal"
                    flex="1"
                    mr="2"
                  >
                    Submit
                  </Button>
                  <Button
                    variant="outline"
                    colorScheme="teal"
                    flex="1"
                    ml="2"
                    onClick={onClose}
                  >
                    Cancel
                  </Button>
                </Box>
              </Box>
            </form>
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalButtonForLogIn;
