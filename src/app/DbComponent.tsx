"use client";

import React, { useRef, useState } from "react";
import styles from "@/app/DbComponent.module.css";

export default function ConnectDB() {
  const [connect, setConnect] = useState<boolean>(false);

  const handleButtonClick = async () => {
    try {
      // call the API endpoint
      const res = await fetch("/api/connectToDatabase");
      const data = await res.json();
      console.log(data);

      if (res.ok) {
        setConnect(true);
      } else {
        throw new Error("Failed to connect to the database");
      }
    } catch (error) {
      console.error(error);
      setConnect(false);
    }
  };
  const handleGetDataClick = async () => {
    try {
      const res = await fetch("/api/getAuthData");
      const data = await res.json();

      if (res.ok) {
        console.log(data);
      } else {
        throw new Error("Failed to fetch data from the Auth collection");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.DB_Info}>
        <div
          className={styles.indicator}
          style={
            connect
              ? { backgroundColor: "rgb(0, 255, 50)" }
              : { backgroundColor: "red" }
          }
        ></div>
        <span>
          {" "}
          {connect
            ? "Database is connected."
            : "Database is disconnected..."}{" "}
        </span>
      </div>
      {connect ? (
        <button
          className={styles.btn_DB}
          onClick={(e) => {
            handleGetDataClick();
          }}
        >
          데이터 가져오기
        </button>
      ) : (
        <button
          className={styles.btn_DB}
          onClick={(e) => {
            handleButtonClick();
          }}
        >
          데이터베이스 연결하기
        </button>
      )}
    </div>
  );
}
