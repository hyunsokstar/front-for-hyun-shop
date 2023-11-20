import React, { useEffect } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import ModalButtonForLogIn from "./ModalButtonForLogIn/ModalButtonForLogIn";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store"; // RootState 추가
import useLoginCheck from "@/hooks/useLoginCheck";
import {
  initializeLoginUserName,
  initialzeIsLoggedIn,
} from "@/redux/reducers/userSlice";
import { removeTokenFromLocalStorage } from "@/lib/authentication";

const CommonHeader = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const loginUserName = useSelector(
    (state: RootState) => state.user.loginUserName
  );

  const { isLoading, data: dataForLoginCheck, error } = useLoginCheck();

  useEffect(() => {
    if (dataForLoginCheck) {
      // todo
      console.log("dataForLoginCheck : ", dataForLoginCheck);
      dispatch(initializeLoginUserName(dataForLoginCheck.user_info.username));
      dispatch(initialzeIsLoggedIn(true));
    }
  }, [dataForLoginCheck]);

  const logoutHandler = () => {
    removeTokenFromLocalStorage();
    dispatch(initialzeIsLoggedIn(false));
  };

  return (
    <Box bg="#C3D8F7" /* 배경색 설정 */>
      <Flex justifyContent="space-between" alignItems="center" p="4">
        <Box>
          <Text fontSize={"lg"}>hyun-shop</Text>
        </Box>
        <Box>
          <Link href="/PaymentTest">
            <Button variant="outline" mr="2">
              payment test
            </Button>
          </Link>
        </Box>
        <Box>
          {isLoggedIn ? (
            <Box display={"flex"} gap={2}>
              <Text>{loginUserName} 님</Text>
              <Button variant="outline" size={"sm"} onClick={logoutHandler}>
                로그아웃
              </Button>
            </Box>
          ) : (
            <ModalButtonForLogIn buttonText="Login" />
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default CommonHeader;
