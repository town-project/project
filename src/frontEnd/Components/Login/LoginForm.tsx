import React from "react";
import styles from "./LoginForm.module.css";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  // 페이지를 이동할 네비게이트 함수
  const navigate = useNavigate();

  // 메인으로 돌아가는 함수
  function goBack(): void {
    navigate("/");
  }

  return (
    <div className={styles.formBox}>
      <h2>로그인</h2>
      <div className={styles.inputSection}>
        <input className={styles.inputValue} placeholder="ID" />
      </div>
      <div className={styles.inputSection}>
        <input className={styles.inputValue} placeholder="Password" />
      </div>
      <div className={styles.inputSection}>
        <button className={styles.sendBtn}>로그인</button>
        <button className={styles.sendBtn} onClick={goBack}>
          취소
        </button>
      </div>

      <div className={styles.accountOptionsBox}>
        <span className={styles.accountOptions}> 아이디 찾기</span>/
        <span className={styles.accountOptions}>비밀번호 찾기</span>
      </div>
    </div>
  );
}
