  import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Checkbox,
    Button,
    IconButton,
  } from "@chakra-ui/react";
  import { FaEdit, FaTrash } from "react-icons/fa";

  interface User {
    id: number;
    username: string;
    created_at: string;
  }

  interface TableForUserListProps {
    users: User[];
  }

  const TableForUserList: React.FC<TableForUserListProps> = ({ users }) => {
    return (
      <Table size="sm" variant="striped" width={"80%"} mx={"auto"}>
        <Thead>
          <Tr>
            <Th>
              <Checkbox />
            </Th>
            <Th>Username</Th>
            <Th>Join Date</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
            <Tr key={user.id}>
              <Td>
                <Checkbox />
              </Td>
              <Td>{user.username}</Td>
              <Td>{user.created_at}</Td>
              <Td>
                <IconButton aria-label="Edit" icon={<FaEdit />} />
                <IconButton aria-label="Delete" icon={<FaTrash />} ml={2} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    );
  };

  export default TableForUserList;
