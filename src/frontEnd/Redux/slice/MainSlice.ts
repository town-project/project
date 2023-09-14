import { createSlice } from "@reduxjs/toolkit";

/* initialState의 기본 타입을 인터페이스로 지정 */
interface MainState {

}

const initialState: MainState = {

}

export const MainSlice = createSlice({
    name: 'MainSlice', // slice 이름
    initialState, // 전역으로 관리할 상태의 초기값
    reducers: { // 상태를 변경시키는 리듀서 함수

    }
})

export const { /* 리듀서 함수 */ } = MainSlice.actions
export default MainSlice.reducer