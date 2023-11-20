import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import ModalButtonForLogIn from "./ModalButtonForLogIn/ModalButtonForLogIn";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store"; // RootState 추가

const CommonHeader = () => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const loginUserName = useSelector(
    (state: RootState) => state.user.loginUserName
  );

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
          {/* login status: {isLoggedIn ? "로그인 상태" : "로그인 전"} */}
          {isLoggedIn ? (
            <Button variant="outline">프로필</Button>
          ) : (
            <ModalButtonForLogIn buttonText="Login" />
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default CommonHeader;
