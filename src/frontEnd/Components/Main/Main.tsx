"use client";
require("dotenv").config();

import React, { useState } from "react";
import styles from "../../../app/page.module.css";
import { Button } from "semantic-ui-react";
import Dropdown from "./Dropdown";
import DbComponent from "@/app/DbComponent";

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
                <img src="../images/menu.png" width="50" height="50" />
              ) : (
                <img
                  src="../images/close.png"
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
                  src="../images/close.png"
                  width="40"
                  height="40"
                  style={{ margin: 3.5, padding: 1.4 }}
                />
              ) : (
                <img src="../images/user.png" width="50" height="50" />
              )}
              {view && <Dropdown />}
            </div>
          </div>
        </div>
      </>
      <DbComponent />
      <div className={styles.footer}>
        <div className={styles.footerimage}>
          <img src="../images/kakao.png" width="40" height="40" />
          <img src="../images/facebook.png" width="40" height="40" />
          <img src="../images/insta.png" width="40" height="40" />
          <img src="../images/naver.png" width="40" height="40" />
        </div>
      </div>
    </main>
  );
}
