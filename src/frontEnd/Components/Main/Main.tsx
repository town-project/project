import Box from "@mui/material/Box";

import Header from "../../Common/Header";
import Footer from "../../Common/Footer";
import GameList from "./GameList";

export default function Main() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header />
      <GameList />
      {/* <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={
              <div style={{ margin: "auto 50%" }}>MainPage Contents</div>
            }
          ></Route>
          <Route path="/" element={<RegisterForm />}></Route>
        </Routes>
      </BrowserRouter> */}
      <Footer />
    </Box>
  );
}
