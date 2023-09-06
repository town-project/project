import "./App.css";
import FindID from "./frontEnd/Components/Login/FindID";
import FindPW from "./frontEnd/Components/Login/FindPW";
import LoginForm from "./frontEnd/Components/Login/LoginForm";
import RegisterForm from "./frontEnd/Components/Login/RegisterForm";
import MBTI_Test from "./frontEnd/Components/MBTI_Test/MBTI_Test";
import Main from "./frontEnd/Components/Main/Main";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* 메인 페이지 */}
          <Route path={`${process.env.PUBLIC_URL}/`} element={<Main />}></Route>
          {/* 로그인 페이지 */}
          <Route path="/login" element={<LoginForm />}></Route>
          {/* 회원가입 페이지 */}
          <Route path="/join" element={<RegisterForm />}></Route>
          {/* 아이디찾기 페이지 */}
          <Route path="/findid" element={<FindID />}></Route>
          {/* 비밀번호찾기 페이지 */}
          <Route path="/findpw" element={<FindPW />}></Route>
          {/* MBTI 테스트 페이지 */}
          <Route path="/MBTI_Test" element={<MBTI_Test />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
