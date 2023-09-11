import { createSlice } from "@reduxjs/toolkit";

/* initialState의 기본 타입을 인터페이스로 지정 */
interface MBTI_TestState {
   MBTI_Question: {
    question: string[];
    currentNum: number;
   }
}

const initialState: MBTI_TestState = {
    MBTI_Question: {
        question: ["약속이 생겼다 나는", 
        "당신은 사람들과 어울리는 것을 좋아하나요, 아니면 혼자 있는 것을 더 좋아하나요?", 
        "긴 대화를 나누는 것이 좋은가요, 아니면 길게 말하는 것을 피하고 짧은 답변을 좋아하나요?"
        ],
        currentNum: 0,
    }
}

export const MBTI_TestSlice = createSlice({
    name: 'MBTI_TestSlice', // slice 이름
    initialState, // 전역으로 관리할 상태의 초기값
    reducers: { // 상태를 변경시키는 리듀서 함수

        // 질문 목록 서버에서 받아와 저장
        setQuestion: (state, action) => {
            state.MBTI_Question.question = action.payload;
        },

        // 질문 목록 보여줄 인덱스
        setCurrentNum: (state, action) => {
            // 배열의 범위를 벗어나지 않게 하기 위함
            if (action.payload >= 0 && action.payload < state.MBTI_Question.question.length) state.MBTI_Question.currentNum = action.payload;
            
        }
    }
})

export const {setQuestion, setCurrentNum} = MBTI_TestSlice.actions
export default MBTI_TestSlice.reducer