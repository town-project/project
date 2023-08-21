import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

import Header from "../../Common/Header";
import Footer from "../../Common/Footer";

// 핸드폰, 인증 버튼 높낮이 맞추기 위해 생성한 theme
const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: "16px",
        },
      },
    },
  },
});

const RegisterForm: React.FC = () => {
  // 페이지를 이동할 네비게이트 함수
  const navigate = useNavigate();

  // 메인으로 돌아가는 함수
  function goBack(): void {
    navigate("/");
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header />
      <Box sx={{ maxWidth: "300px", margin: "30px auto", textAlign: "center" }}>
        <h2>회원가입</h2>
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
          label="비밀번호"
          placeholder="8~16자 영문 대소문자, 숫자, 특수문자"
          variant="outlined"
          fullWidth
          margin="normal"
          InputProps={{
            style: {
              borderRadius: 70,
              height: 50,
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
          label="비밀번호 확인"
          placeholder=""
          variant="outlined"
          fullWidth
          margin="normal"
          InputProps={{
            style: {
              borderRadius: 70,
              height: 50,
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
          label="닉네임"
          placeholder=""
          variant="outlined"
          fullWidth
          margin="normal"
          InputProps={{
            style: {
              borderRadius: 70,
              height: 50,
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
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <TextField
              label="핸드폰"
              placeholder='"-"를 제외하고 입력'
              variant="outlined"
              fullWidth
              margin="normal"
              InputProps={{
                style: {
                  borderRadius: 70,
                  height: 50,
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
        {/* 회원가입버튼 */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Button
            className="RegisterBtn"
            fullWidth
            variant="contained"
            style={{
              height: 50,
              borderRadius: 70,
              marginTop: 15,
              fontSize: 16,
              backgroundColor: "black",
              color: "white",
            }}
          >
            회 원 가 입
          </Button>
        </Box>
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

export default RegisterForm;
