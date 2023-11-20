// pages/MyCounter.tsx
import { Box, Button, Text } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store"; // RootState 추가
import { decrement, increment } from "../redux/reducers/counterSlice";

const MyCounter = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <Box>
      <Text>현재 카운트: {count}</Text>
      <Button
        onClick={handleIncrement}
        variant="outline"
        colorScheme="blue" // 버튼의 색상 스킴 설정
        mr={2} // 오른쪽 마진 추가
      >
        +
      </Button>
      <Button
        onClick={handleDecrement}
        variant="outline"
        colorScheme="red" // 버튼의 색상 스킴 설정
      >
        -
      </Button>
    </Box>
  );
};

export default MyCounter;
