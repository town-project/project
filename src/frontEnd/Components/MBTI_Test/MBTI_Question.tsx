import Header from "../../Common/Header";
import Footer from "../../Common/Footer";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../Redux/store/store";

import { Box, Button, Container, Paper, styled } from "@mui/material";
import {
  setAnswer,
  setChangeAnswer,
  setCurrentNum,
} from "../../Redux/slice/MBTI_TestSlice";
import { useEffect, useState } from "react";

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
  // 버튼 배경색 상태
  const [ansColor, setAnsColor] = useState([false, false]);
  const navigate = useNavigate();

  // 질문지 배열
  const question: string[] = useSelector(
    (state: RootState) => state.MBTI_TestReducer.MBTI_Question.question
  );
  // 질문지 인덱스
  const currentNum: number = useSelector(
    (state: RootState) => state.MBTI_TestReducer.MBTI_Question.currentNum
  );
  // 답변 여부 배열
  const answer: boolean[][] = useSelector(
    (state: RootState) => state.MBTI_TestReducer.MBTI_Question.answer
  );

  const currentNumDispatch = useDispatch(); // 질문지의 질문이 전환될 수 있게 인덱스의 값을 변경 할 Dispatch
  const answerDispatch = useDispatch(); // 질문 배열의 길이만큼 답변 배열 초기화 하기 위한 dispatch
  const changeAnswerDispatch = useDispatch(); // 질문에 대한 답변 여부 업데이트 할 dispatch

  // 질문지 배열의 인덱스 증가
  function increaseNum(n: number): void {
    n > 0
      ? currentNumDispatch(setCurrentNum(currentNum + 1))
      : currentNumDispatch(setCurrentNum(currentNum - 1));
  }

  // 답변 여부 업데이트
  function changeAnswer(value: [number, boolean]): void {
    changeAnswerDispatch(setChangeAnswer(value));
  }
  
  // 페이지 이동 함수
  function movePage(page: string): void {
    navigate(`/${page}`);
  }

  useEffect(() => {
    // 렌더링 될 때마다 항상 0으로 초기화
    currentNumDispatch(setCurrentNum(0));
    // 컴포넌트가 마운트 되면 질문 배열의 길이 만큼 답변 선택 배열 생성
    answerDispatch(setAnswer(question.length));
  }, []);

  return (
    <Box>
      <Header />
      <Container maxWidth="md">
        <Item elevation={12}>
          <Box>{question[currentNum]}</Box>
          <Box>
            <Button
              style={
                ansColor[0]
                  ? {
                      borderColor: "gray",
                      borderRadius: "20px",
                      backgroundColor: "gray",
                    }
                  : {
                      borderColor: "gray",
                      borderRadius: "20px",
                      backgroundColor: "white",
                    }
              }
              variant="outlined"
              onClick={() => {
                // 질문에 대한 답변 배열의 답변 여부 변경
                changeAnswer([currentNum, true]);
                // 클릭된 버튼 색상 바꾸기 위해 ansColor의 bool값 업데이트
                let temp = ansColor;
                temp[0] = true;
                temp[1] = !temp[0];
                setAnsColor([...temp]);
              }}
              size="medium"
            >
              {"답변 1"}
            </Button>
          </Box>
          <Box>
            <Button
              style={
                ansColor[1]
                  ? {
                      borderColor: "gray",
                      borderRadius: "20px",
                      backgroundColor: "gray",
                    }
                  : {
                      borderColor: "gray",
                      borderRadius: "20px",
                      backgroundColor: "white",
                    }
              }
              onClick={() => {
                // 질문에 대한 답변 배열의 답변 여부 변경
                changeAnswer([currentNum, false]);
                // 클릭된 버튼 색상 바꾸기 위해 ansColor의 bool값 업데이트
                let temp = ansColor;
                temp[1] = true;
                temp[0] = !temp[1];
                setAnsColor([...temp]);
              }}
              variant="outlined"
              size="medium"
            >
              {"답변 2"}
            </Button>
          </Box>
        </Item>
        <Box style={{ justifyContent: "space-between" }}>
        <Button
            style={{ marginTop: "5vh", float: "left", borderColor: "gray" }}
            onClick={() => {
              if (answer[currentNum][2]) increaseNum(1); // 현재 질문에 대한 답변을 골랐을 때만 다음 질문으로 넘어 갈 수 있음
              setAnsColor([false, false]); // 다음 질문으로 넘어갈 시, 버튼 색상 초기화
              movePage('MBTI_Test');
            }}
            variant="outlined"
            size="medium"
          >
            {"뒤로 가기"}
          </Button>
          <Button
            style={{ marginTop: "5vh", float: "right", borderColor: "gray" }}
            onClick={() => {
              if (answer[currentNum][2]) increaseNum(1); // 현재 질문에 대한 답변을 골랐을 때만 다음 질문으로 넘어 갈 수 있음
              setAnsColor([false, false]); // 다음 질문으로 넘어갈 시, 버튼 색상 초기화
            }}
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
