import { createSlice } from "@reduxjs/toolkit";

/* initialState의 기본 타입을 인터페이스로 지정 */
interface CommonState {

}

const initialState: CommonState = {

}

export const CommonSlice = createSlice({
    name: 'CommonSlice', // slice 이름
    initialState, // 전역으로 관리할 상태의 초기값
    reducers: { // 상태를 변경시키는 리듀서 함수

    }
})

export const { /* 리듀서 함수 */ } = CommonSlice.actions
export default CommonSlice.reducer