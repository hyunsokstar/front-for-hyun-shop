import { Box } from "@chakra-ui/react";
import React from "react";
import TableForUserList from "../Table/TableForUserList";
import { useMutation, useQuery } from "@tanstack/react-query";
import { apiForGetUserList } from "@/api/api_for_user";

type Props = {};

const ContainerForUsers = (props: Props) => {
  const {
    isLoading: loadingForUserList,
    data: dataForUserList,
    refetch: refetchForUserList,
  } = useQuery<any>({
    queryKey: ["apiForGetUserList"],
    queryFn: apiForGetUserList,
  });

  console.log("dataForUserList : ", dataForUserList);

  if (!dataForUserList) {
    return <Box>Loading for dataForUserList</Box>;
  }

  return (
    <Box mt={2}>
      <TableForUserList users={dataForUserList} />
    </Box>
  );
};

export default ContainerForUsers;
