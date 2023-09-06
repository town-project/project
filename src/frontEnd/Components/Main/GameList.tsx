import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Paper, Grid, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#c0c0c0",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "20vh",
  cursor: "pointer",
}));

export default function GameList() {
  // 게임 개수(추후 서버에서 받아와 리덕스 스토어에 데이터 저장할 예정)
  const gameCount: string[] = [
    "MBTI_TEST",
    "게임을 준비 중입니다",
    "게임을 준비 중입니다",
    "게임을 준비 중입니다",
    "게임을 준비 중입니다",
    "게임을 준비 중입니다",
  ];

  // 임시 타이머 (추후 서버에 테스트 리스트 데이터가 들어가면 타임아웃을 쓰지 않고 테스트 데이터가 정상적으로 받아와 지면 스켈레톤 제거거)
  const [time, setTime] = useState<boolean>(false);

  const navigate = useNavigate();

  // 페이지 이동 함수
  function movePage(page: string): void {
    navigate(`/${page}`);
  }

  useEffect(() => {
    // 2초 뒤 스켈레톤에서 -> 테스트 리스트로 변환
    setTimeout(() => {
      setTime(true);
    }, 2000);
  }, []);

  return (
    <Box sx={{ flexGrow: 1, margin: "17em 20% 2em 20%", padding: "1em" }}>
      {/* 테스트 리스트  */}
      <Grid container spacing={2}>
        {gameCount.map((item, idx) => {
          return (
            <Grid item xs={4}>
              {time === true ? (
                <Item
                  onClick={() => {
                    if (idx === 0) movePage(item);
                  }}
                >
                  {item}
                </Item>
              ) : (
                <Skeleton variant="rounded" height={"20vh"} />
              )}
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
