import { createSlice } from "@reduxjs/toolkit";

/* initialState의 기본 타입을 인터페이스로 지정 */
interface LoginState {
  password: string; // 비밀번호
  passwordCheck: string; // 비밀번호 확인
}

const initialState: LoginState = {
  password: "",
  passwordCheck: "",
};

export const LoginSlice = createSlice({
  name: "LoginSlice", // slice 이름
  initialState, // 전역으로 관리할 상태의 초기값
  reducers: {
    // 상태를 변경시키는 리듀서 함수

    // 비밀번호 상태 변경
    setPassWord: (state, action) => {
      state.password = action.payload;
    },
    // 비밀번호 확인 상태 변경
    setPassWordCheck: (state, action) => {
      state.passwordCheck = action.payload;
    },
  },
});

export const { setPassWord, setPassWordCheck } = LoginSlice.actions;
export default LoginSlice.reducer;
