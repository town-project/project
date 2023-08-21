import React from "react";
import styles from "./RegisterForm.module.css";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  // 페이지를 이동할 네비게이트 함수
  const navigate = useNavigate();

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
        />
      </div>

      <div className={styles.inputSection}>
        <div className={styles.inputTitle}>비밀번호 확인</div>
        <input className={styles.inputValue} placeholder="" />
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
        <button className={styles.RegisterBtn}>회원가입</button>
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
