import { Box, Paper, Grow, Grid, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Header from "../../Common/Header";
import Footer from "../../Common/Footer";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#c0c0c0",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "20vh",
}));


export default function Mbti_test() {
  // MBTI 검사 전 간략한 설명(추후 서버에서 받아와 리덕스 스토어에 데이터 저장할 예정)
  const explain: string[] = [
    "검사 시간은 대략 15분 입니다",
    "질문이 마음에 들지 않더라도 정직하게 답변해 주세요",
    "가능하면 답변 시 '중립을' 선택하지 마십시오",
  ];

  return (
    <Box>
      <Header />
      <Box sx={{ flexGrow: 1, margin: "15em 20% 2em 20%", padding: "1em" }}>
        <Grid container spacing={2}>
          {/* 자연스럽게 하나씩 테스트 설명 리스트가 나타나게끔 구현 */}
          {explain.map((item, idx) => {
            return (
              <Grid item xs={4}>
                <Grow
                  in={true}
                  style={{ transformOrigin: "0 0 0" }}
                  {...{ timeout: (idx + 1) * 1000 }}
                >
                  <Item>{item}</Item>
                </Grow>
              </Grid>
            );
          })}
        </Grid>
      </Box>

      {/* 하단 버튼 부붙 */}
      <Box sx={{ textAlign: "center", marginTop: 30 }}>
        <Grow
          in={true}
          style={{ transformOrigin: "0 0 0" }}
          {...{ timeout: 1000 }}
        >
          <Button
            variant="contained"
            sx={{ borderRadius: 70 }}
            style={{
              height: "5vh",
              width: "10vw",
              borderRadius: 70,
              marginRight: 5,
              fontSize: 16,
              backgroundColor: "black",
              color: "white",
            }}
          >
            테스트 시작
          </Button>
        </Grow>
        <Grow
          in={true}
          style={{ transformOrigin: "0 0 0" }}
          {...{ timeout: 1000 }}
        >
          <Button
            variant="contained"
            sx={{ borderRadius: 70 }}
            style={{
              height: "5vh",
              width: "10vw",
              borderRadius: 70,
              marginLeft: 5,
              fontSize: 16,
              backgroundColor: "black",
              color: "white",
            }}
          >
            뒤로 가기
          </Button>
        </Grow>
      </Box>
      <Footer />
    </Box>
  );
}
