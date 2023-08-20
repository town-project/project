import React from "react";
import styles from "./LoginForm.module.css";
export default function LoginForm() {
  return (
    <div className={styles.formBox}>
      <h2>회원가입</h2>
      <div className={styles.inputSection}>
        <input className={styles.inputValue} placeholder="ID" />
      </div>
      <div className={styles.inputSection}>
        <input className={styles.inputValue} placeholder="Password" />
      </div>
      <div className={styles.inputSection}>
        <button className={styles.sendBtn}>로그인</button>
      </div>

      <div className={styles.accountOptionsBox}>
        <span className={styles.accountOptions}> 아이디 찾기</span>/
        <span className={styles.accountOptions}>비밀번호 찾기</span>
      </div>
    </div>
  );
}
