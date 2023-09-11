import Header from "../../Common/Header";
import Footer from "../../Common/Footer";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../Redux/store/store";

import { Box, Button, Container, Paper, styled } from "@mui/material";
import { setCurrentNum } from "../../Redux/slice/MBTI_TestSlice";
import { useEffect } from "react";

// 질문지 Paper
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  lineHeight: "60px",
  height: "50vh",
  marginTop: "10vh",
}));

export default function MBTI_Question() {
  // 질문지 배열
  const question: string[] = useSelector(
    (state: RootState) => state.MBTI_TestReducer.MBTI_Question.question
  );
  // 질문지 인덱스
  const currentNum: number = useSelector(
    (state: RootState) => state.MBTI_TestReducer.MBTI_Question.currentNum
  );

  // 질문지의 질문이 전환될 수 있게 인덱스의 값을 변경 할 Dispatch
  const currentNumDispatch = useDispatch();

  // 질문지 배열의 인덱스 증가
  function increaseNum(n: number): void {
    n > 0
      ? currentNumDispatch(setCurrentNum(currentNum + 1))
      : currentNumDispatch(setCurrentNum(currentNum - 1));
  }

  useEffect(() => {
    // 렌더링 될 때마다 항상 0으로 초기화
    currentNumDispatch(setCurrentNum(0));    
  }, [])

  return (
    <Box>
      <Header />
      <Container maxWidth="md">
        <Item elevation={12}>
          <Box>{question[currentNum]}</Box>
          <Box>
            <Button
              style={{ borderColor: "gray", borderRadius: "20px" }}
              variant="outlined"
              size="medium"
            >
              {"답변 1"}
            </Button>
          </Box>
          <Box>
            <Button
              style={{ borderColor: "gray", borderRadius: "20px" }}
              variant="outlined"
              size="medium"
            >
              {"답변 2"}
            </Button>
          </Box>
        </Item>
        <Box style={{ justifyContent: "space-between" }}>
          <Button
            style={{ marginTop: "5vh", float: 'left', borderColor: "gray" }}
            onClick={() => increaseNum(-1)}
            variant="outlined"
            size="medium"
          >
            {"<"}
          </Button>
          <Button
            style={{ marginTop: "5vh", float: 'right', borderColor: "gray" }}
            onClick={() => increaseNum(1)}
            variant="outlined"
            size="medium"
          >
            {">"}
          </Button>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}
