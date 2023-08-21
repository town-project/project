import "./App.css";
import LoginForm from "./frontEnd/Components/Login/LoginForm";
import RegisterForm from "./frontEnd/Components/Login/RegisterForm";
import Main from "./frontEnd/Components/Main/Main";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* 메인 페이지 */}
          <Route
            path={`${process.env.PUBLIC_URL}/`}
            element={<Main />}
          ></Route>
          {/* 로그인 페이지 */}
          <Route path="/login" element={<LoginForm />}></Route>{" "}
          {/* 회원가입 페이지 */}
          <Route path="/join" element={<RegisterForm />}></Route>{" "}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
