import Box from "@mui/material/Box";

import Header from "../../Common/Header";
import Footer from "../../Common/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "../Login/LoginForm";
import RegisterForm from "../Login/RegisterForm";

export default function MainCopy() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={
              <div style={{ margin: "auto 50%" }}>MainPage Contents</div>
            }
          ></Route>
          <Route path="/" element={<RegisterForm />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </Box>
  );
}
