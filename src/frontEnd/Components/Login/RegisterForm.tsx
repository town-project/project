import React from "react";
import styles from "./RegisterForm.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../Redux/store/store";
import { setPassWord, setPassWordCheck } from "../../Redux/slice/LoginSlice";
import { useEffect } from "react";
import Alert from "@mui/material/Alert";

export default function RegisterForm() {
  const navigate = useNavigate(); // 페이지를 이동할 네비게이트 함수
  
  // 비밀번호
  const pw: string = useSelector( 
    (state: RootState) => state.LoginReducer.password
  );

  // 비밀번호 확인  
  const pwCheck: string = useSelector(
    (state: RootState) => state.LoginReducer.passwordCheck
  );

  // 비밀번호 변경
  const pwDispatch = useDispatch();

  // 비밀번호 변경 함수
  function pwChange(e: React.ChangeEvent<HTMLInputElement>, id: number): void {
    // 비밀번호 상태 변경
    if (id === 1) pwDispatch(setPassWord(e.target.value));
    // 비밀번호 확인 상태 변경
    else pwDispatch(setPassWordCheck(e.target.value));
  }

  // 비밀번호 일치여부 확인
  function pwSame(): boolean {
    if (pw === pwCheck && pw.length >= 8 && pwCheck.length >= 8) return true;
    else return false;
  }

  // 메인으로 돌아가는 함수
  function goBack(): void {
    navigate("/");
  }

  return (
    <div className={styles.formBox}>
      <h2>회원가입</h2>

      <div className={styles.inputSection}>
        <div className={styles.inputTitle}>아이디</div>
        <input className={styles.inputValue} placeholder="" />
      </div>

      <div className={styles.inputSection}>
        <div className={styles.inputTitle}>비밀번호</div>
        <input
          className={styles.inputValue}
          placeholder="8~16자 영문 대소문자, 숫자, 특수문자"
          onChange={(e) => pwChange(e, 1)}
        />
      </div>

      <div className={styles.inputSection}>
        <div className={styles.inputTitle}>비밀번호 확인</div>
        <input
          className={styles.inputValue}
          placeholder=""
          onChange={(e) => pwChange(e, 2)}
        />
      </div>

      <div className={styles.inputSection}>
        <div className={styles.inputTitle}>닉네임</div>
        <input className={styles.inputValue} placeholder={``} />
      </div>

      <div className={styles.inputSection}>
        <div className={styles.inputTitle}>핸드폰</div>
        <input
          className={styles.inputValue}
          placeholder={`"-"를 제외하고 입력`}
        ></input>
        <button className={styles.AuthPhone}>인증</button>
      </div>

      {/* <div className={styles.btnGroup}> */}
      <div className={styles.inputSection}>
        <button
          className={styles.RegisterBtn}
          onClick={() => { // 비밀번호와 비밀번호 확인이 서로 일치하는지 확인
            if (pwSame()) alert('회원 가입 성공')
            else alert('비밀번호가 8자리 이하이거나 서로 일치하지 않습니다.')
          }}
        >
          회원가입
        </button>
      </div>
      <div className={styles.inputSection}>
        <button className={styles.cancleBtn} onClick={goBack}>
          취소
        </button>
      </div>
      {/* </div> */}
    </div>
  );
}
