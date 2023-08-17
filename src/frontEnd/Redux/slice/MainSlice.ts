import { createSlice } from "@reduxjs/toolkit";

/* initialState의 기본 타입을 인터페이스로 지정 */
interface MainState {
  ButtonText: Array<string | number>; // 로그인 버튼 드랍다운 텍스트
  MenuBtn: boolean; // 메뉴버튼 활성화
  LoginState: boolean; // 로그인버튼 활성화
  anchorEl: null | HTMLElement;
  MemberDropdown: string[];
  NonMemberDropdown: string[];
}

const initialState: MainState = {
  ButtonText: ["마이페이지", "로그아웃"],
  MenuBtn: true,
  LoginState: false,
  anchorEl: null,
  MemberDropdown: ["Logout", "MyInfo"],
  NonMemberDropdown: ["Login", "Join"],
};

export const MainSlice = createSlice({
  name: "Main", // slice 이름
  initialState, // 전역으로 관리할 상태의 초기값
  reducers: {
    // 상태를 변경시키는 리듀서 함수

    // 로그인 버튼 텍스트 설정
    setButtonText: (state, action) => {
      state.ButtonText = action.payload;
    },

    // 메뉴 버튼 boolean(활/비활성화)
    setMenuBtn: (state, action) => {
      state.MenuBtn = action.payload;
    },

    // 로그인 버튼 클릭(드랍다운 비활/활성화)
    setLoginState: (state, action) => {
      state.LoginState = action.payload;
    },

    // 드랍다운 생성하기 위해 currentTarget 가져와 anchorEl 변경
    setAnchorEl: (state, action) => {
      state.anchorEl = action.payload;
    },
  },
});

export const { setButtonText, setMenuBtn, setLoginState, setAnchorEl } =
  MainSlice.actions;
export default MainSlice.reducer;
