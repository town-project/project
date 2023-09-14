import React, { useState } from "react";
import styles from "./page.module.css";
import { Button } from "semantic-ui-react";
import Dropdown from "./Dropdown";
import menu from "../../images/menu.png";
import close from "../../images/close.png";
import facebook from "../../images/facebook.png";
import insta from "../../images/insta.png";
import naver from "../../images/naver.png";
import user from "../../images/user.png";
import kakao from "../../images/kakao.png";

export default function Main() {
  const [isToggled, setIsToggled] = useState(false);
  // const [userToggled, setUserToggled] = useState(false);
  // const initialState = true;
  const [view, setView] = useState(false);

  return (
    <main>
      <>
        <div>
          <div className={styles.header}>
            {/* 메뉴버튼 */}
            <div
              className={styles.imageContainer}
              onClick={() => {
                setIsToggled(!isToggled);
              }}
            >
              {!isToggled ? (
                <img src={menu} width="50" height="50" />
              ) : (
                <img
                  src={close}
                  width="40"
                  height="40"
                  style={{ margin: 3.5, padding: 1.4 }}
                />
              )}
            </div>
            <div className={styles.title}>MBTI TEST</div>
            {/* 유저버튼 */}
            <div
              className={styles.imageContainer}
              onClick={() => {
                setView(!view);
              }}
            >
              {view ? (
                <img
                  src={close}
                  width="40"
                  height="40"
                  style={{ margin: 3.5, padding: 1.4 }}
                />
              ) : (
                <img src={user} width="50" height="50" />
              )}
              {view && <Dropdown />}
            </div>
          </div>
        </div>
      </>

      <div className={styles.footer}>
        <div className={styles.footerimage}>
          <img src={kakao} width="40" height="40" />
          <img src={facebook} width="40" height="40" />
          <img src={insta} width="40" height="40" />
          <img src={naver} width="40" height="40" />
        </div>
      </div>
    </main>
  );
}
