import { configureStore } from "@reduxjs/toolkit";
import MainSlice from "../slice/MainSlice";
import CommonSlice from "../slice/CommonSlice";
import LoginSlice from "../slice/LoginSlice";
import MBTI_ResultSlice from "../slice/MBTI_ResultSlice";
import MBTI_TestSlice from "../slice/MBTI_TestSlice";

/* 작성한 slice들을 하나의 reducer로 종합해주고, 완성된 store를 내보내줌 */
export const store = configureStore({
    reducer: {
        CommonReducer: CommonSlice,
        MainReducer: MainSlice,
        LoginReducer: LoginSlice,
        MBTI_ResultReducer: MBTI_ResultSlice,
        MBTI_TestReducer: MBTI_TestSlice,
    }
})

/* store.getState, store.dispath 타입 정의 */
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch