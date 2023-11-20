import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import CommonHeader from "@/components/CommonHeader";
import MyCounter from "@/components/MyCounter";
import TableForUserList from "@/components/Table/TableForUserList";
import ContainerForUsers from "@/components/Container/ContainerForUsers";

type Props = {};

const Home = (props: Props) => {
  return (
    <Box>
      <CommonHeader />
      <ContainerForUsers />
      {/* <MyCounter /> */}
    </Box>
  );
};

export default Home;
