import React from "react";
import { TextField, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../../Common/Header";
import Footer from "../../Common/Footer";
export default function LoginForm() {
  // 페이지를 이동할 네비게이트 함수
  const navigate = useNavigate();

  // 메인으로 돌아가는 함수
  function goBack(): void {
    navigate("/");
  }

  //ID찾기로 돌아가는 함수
  function findId(): void {
    navigate("/findid");
  }

  //PW찾기로 돌아가는 함수
  function findPw(): void {
    navigate("/findPW");
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header />
      <Box
        sx={{
          maxWidth: "300px",
          margin: "100px auto",
          textAlign: "center",
        }}
      >
        <h2>로그인</h2>
        <TextField
          placeholder="ID"
          // variant="outlined"
          fullWidth
          margin="normal"
          InputProps={{
            style: {
              borderRadius: 70,
              paddingLeft: 20,
              height: 50,
            },
          }}
        />
        <TextField
          placeholder="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          InputProps={{
            style: {
              borderRadius: 70,
              paddingLeft: 20,
              height: 50,
            },
          }}
        />

        <Button
          variant="contained"
          fullWidth
          style={{
            height: 50,
            borderRadius: 70,
            marginTop: 15,
            marginRight: 10,
            fontSize: 16,
            backgroundColor: "black",
            color: "white",
          }}
        >
          로그인
        </Button>
        <Button
          variant="contained"
          fullWidth
          onClick={goBack}
          sx={{ borderRadius: 70 }}
          style={{
            height: 50,
            borderRadius: 70,
            marginTop: 15,
            fontSize: 16,
            backgroundColor: "black",
            color: "white",
          }}
        >
          취소
        </Button>
        <div style={{ marginTop: 50 }}>
          <span
            onClick={findId}
            style={{ fontSize: 14, margin: "0 30px", cursor: "pointer" }}
          >
            아이디 찾기
          </span>
          |
          <span
            onClick={findPw}
            style={{ fontSize: 14, margin: "0 30px", cursor: "pointer" }}
          >
            비밀번호 찾기
          </span>
        </div>
      </Box>
      <Footer />
    </Box>
  );
}
