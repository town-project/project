import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

/*  
    타입스크립트로 리덕스를 쓸 때는 타입을 붙여서 만든 useAppDispatch와 useAppSeletor로 사용
    configureStore.ts에서 정의한 타입들이 여기에서 쓰임
 */

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
