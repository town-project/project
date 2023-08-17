// 이미지 import
import menu from "../../images/menu.png";
import close from "../../images/close.png";
import facebook from "../../images/facebook.png";
import insta from "../../images/insta.png";
import naver from "../../images/naver.png";
import user from "../../images/user.png";
import kakao from "../../images/kakao.png";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useSelector, useDispatch } from "react-redux";
import {
  setMenuBtn,
  setLoginState,
  setAnchorEl,
} from "../../Redux/slice/MainSlice";
import type { RootState } from "../../Redux/store/store";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

export default function MainCopy() {
  // 메뉴 비활/활성화 (Default -> true)
  const menuCheck = useSelector(
    (state: RootState) => state.MainReducer.MenuBtn
  );
  // (로그인/비로그인) 상태에 맞는 드랍다운 원소 출력
  const loginCheck = useSelector(
    (state: RootState) => state.MainReducer.LoginState
  );
  // 드랍다운 생성하기 위한 element의 위치 정보
  const anchorElCheck = useSelector(
    (state: RootState) => state.MainReducer.anchorEl
  );
  // 드랍다운 생성 여부
  const open = Boolean(anchorElCheck);
  // 로그인 상태 여부
  const member = useSelector(
    (state: RootState) => state.MainReducer.MemberDropdown
  );
  // 로그인 상태 여부
  const NonMember = useSelector(
    (state: RootState) => state.MainReducer.NonMemberDropdown
  );

  const loginDispatch = useDispatch(); // (로그인/비로그인) 드랍다운 변경
  const menuDispatch = useDispatch(); // 메뉴 버튼 변경
  const anchorDispatch = useDispatch(); // 앵커 위치 정보 전달

  // 메뉴 버튼 bool 값 변경하기 위한 함수
  function menuClick() {
    menuDispatch(setMenuBtn(!menuCheck));
  }

  // 로그인 드랍다운 위치 정보 알아내는 함수
  function loginClick(event: React.MouseEvent<HTMLElement>) {
    anchorDispatch(setAnchorEl(event.currentTarget));
  }

  // 드랍다운 제거
  function dropDownClose() {
    anchorDispatch(setAnchorEl(null));
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        {/* 메뉴 버튼 */}
        <Grid item xs={4}>
          <Button>
            {menuCheck ? (
              <img
                src={menu}
                onClick={menuClick}
                alt="menu"
                width="50"
                height="50"
              />
            ) : (
              <img
                src={close}
                onClick={menuClick}
                alt="menu"
                width="50"
                height="50"
              />
            )}
          </Button>
        </Grid>

        {/* 타이틀 */}
        <Grid item xs={4}>
          <Box
            sx={{
              fontSize: "2rem",
              fontWeight: "500",
              margin: "3px",
              textAlign: "center",
            }}
          >
            MBTI TEST
          </Box>
        </Grid>

        {/* 로그인 버튼 */}
        <Grid item xs={4} textAlign="right">
          <Button onClick={loginClick}>
            <img src={user} alt="user" width="50" height="50" />
          </Button>

          <Menu
            anchorEl={anchorElCheck}
            open={open}
            onClose={dropDownClose}
            TransitionComponent={Fade}
          >
            {loginCheck
              ? member.map((e) => (
                  <MenuItem onClick={dropDownClose}>{e}</MenuItem>
                ))
              : NonMember.map((e) => (
                  <MenuItem onClick={dropDownClose}>{e}</MenuItem>
                ))}
          </Menu>
        </Grid>
      </Grid>

      {/* footer 부분 */}
      <Box sx={{ position: "fixed", bottom: 0, width: "100%" }}>
        <Grid item xs={12} textAlign="center">
          <img src={kakao} alt="kakao" width="40" height="40" />
          <img src={facebook} alt="facebook" width="40" height="40" />
          <img src={insta} alt="insta" width="40" height="40" />
          <img src={naver} alt="naver" width="40" height="40" />
        </Grid>
      </Box>
    </Box>
  );
}
