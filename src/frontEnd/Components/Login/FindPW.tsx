import React from "react";
import { TextField, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../../Common/Header";
import Footer from "../../Common/Footer";

const FindPW: React.FC = () => {
  // 페이지를 이동할 네비게이트 함수
  const navigate = useNavigate();

  // 로그인으로 돌아가는 함수
  function goBack(): void {
    navigate("/Login");
  }

  // 핸드폰, 인증 버튼 높낮이 맞추기 위해 생성한 theme
  const theme = createTheme({
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            marginBottom: "15px",
          },
        },
      },
    },
  });
  return (
    <Box>
      <Header />
      <Box
        sx={{
          maxWidth: "300px",
          margin: "100px auto",
          textAlign: "center",
        }}
      >
        <h2>비밀번호 찾기</h2>
        <TextField
          label="아이디"
          placeholder=""
          variant="outlined"
          fullWidth
          margin="normal"
          InputProps={{
            style: {
              borderRadius: 70,
              height: 50,
            },
            classes: {
              focused: "focused",
            },
          }}
          //label 글자에 여백을 줌
          InputLabelProps={{
            style: {
              marginLeft: 15,
            },
          }}
        />
        <TextField
          label="이름"
          placeholder=""
          variant="outlined"
          fullWidth
          margin="normal"
          InputProps={{
            style: {
              borderRadius: 70,
              height: 50,
            },
            classes: {
              focused: "focused",
            },
          }}
          //label 글자에 여백을 줌
          InputLabelProps={{
            style: {
              marginLeft: 15,
            },
          }}
        />

        <ThemeProvider theme={theme}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              margin: "normal",
            }}
          >
            <TextField
              label="핸드폰"
              placeholder=""
              variant="outlined"
              fullWidth
              margin="normal"
              InputProps={{
                style: {
                  borderRadius: 70,
                  height: 50,
                },
                classes: {
                  focused: "focused",
                },
              }}
              //label 글자에 여백을 줌
              InputLabelProps={{
                style: {
                  marginLeft: 15,
                },
              }}
            />
            <Button
              className="AuthPhone"
              style={{
                borderRadius: 30,
                height: 50,
                backgroundColor: "black",
                color: "white",
              }}
            >
              인증
            </Button>
          </Box>
        </ThemeProvider>

        <TextField
          label="인증번호"
          placeholder=""
          variant="outlined"
          fullWidth
          style={{
            marginTop: 10,
          }}
          InputProps={{
            style: {
              borderRadius: 70,
              height: 50,
            },
            classes: {
              focused: "focused",
            },
          }}
          //label 글자에 여백을 줌
          InputLabelProps={{
            style: {
              marginLeft: 15,
            },
          }}
        />
        <Button
          variant="contained"
          fullWidth
          sx={{ borderRadius: 70 }}
          style={{
            height: 50,
            borderRadius: 70,
            marginTop: 25,
            fontSize: 16,
            backgroundColor: "black",
            color: "white",
          }}
        >
          다음
        </Button>
        {/* 취소버튼 */}
        <Button
          className="cancleBtn"
          fullWidth
          variant="outlined"
          onClick={goBack}
          style={{
            height: 50,
            borderRadius: 70,
            marginTop: 20,
            fontSize: 16,
            backgroundColor: "black",
            color: "white",
          }}
        >
          취 소
        </Button>
      </Box>

      <Footer />
    </Box>
  );
};
export default FindPW;
