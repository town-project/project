"use client";
require("dotenv").config();

import Main from "../frontEnd/Components/Main/Main";
import React from "react";
import DbComponent from "@/app/DbComponent";

export default function Home() {
  return (
    <Main />
    // <main>
    //   <DbComponent />
    // </main>
  );
}
