require("dotenv").config();

import React from "react";
import DbComponent from "@/app/DbComponent";

export default function Home() {
  return (
    <main>
      <DbComponent />
    </main>
  );
}
