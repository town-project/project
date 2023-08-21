// 이미지 import
import menu from "../images/menu.png";
import close from "../images/close.png";
import user from "../images/user.png";

import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../Redux/store/store";
import {
  setMenuBtn,
  setAnchorEl,
} from "../Redux/slice/MainSlice";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  // 페이지를 이동할 네비게이트 함수
  const navigate = useNavigate();

  // 메뉴 비활/활성화 (Default -> true)
  const menuCheck: boolean = useSelector(
    (state: RootState) => state.MainReducer.MenuBtn
  );

  // (로그인/비로그인) 상태에 맞는 드랍다운 원소 출력
  const loginCheck: boolean = useSelector(
    (state: RootState) => state.MainReducer.LoginState
  );

  // 드랍다운 생성하기 위한 element의 위치 정보
  const anchorElCheck: HTMLElement | null = useSelector(
    (state: RootState) => state.MainReducer.anchorEl
  );

  // 드랍다운 생성 여부
  const open: boolean = Boolean(anchorElCheck);

  // 로그인 상태 여부
  const member: string[] = useSelector(
    (state: RootState) => state.MainReducer.MemberDropdown
  );

  // 로그인 상태 여부
  const NonMember: string[] = useSelector(
    (state: RootState) => state.MainReducer.NonMemberDropdown
  );

  const loginDispatch = useDispatch(); // (로그인/비로그인) 드랍다운 변경
  const menuDispatch = useDispatch(); // 메뉴 버튼 변경
  const anchorDispatch = useDispatch(); // 앵커 위치 정보 전달

  // 메뉴 버튼 bool 값 변경하기 위한 함수
  function menuClick(): void {
    menuDispatch(setMenuBtn(!menuCheck));
  }

  // 로그인 드랍다운 위치 정보 알아내는 함수
  function loginClick(event: React.MouseEvent<HTMLElement>): void {
    anchorDispatch(setAnchorEl(event.currentTarget));
  }

  // 드랍다운 제거
  function dropDownClose(): void {
    anchorDispatch(setAnchorEl(null));
  }

  // 페이지 이동 함수
  function movePage(page: string): void {
    navigate(`/${page}`);
  }

  useEffect(() => {
    console.log("헤더 컴포넌트");
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
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
                  <MenuItem
                    onClick={(e) => {
                      dropDownClose();
                    }}
                  ></MenuItem>
                ))
              : NonMember.map((e) => (
                  <MenuItem
                    onClick={() => {
                      // 로그인, 회원가입 버튼 클릭시 목적에 맞게 페이지 라우팅 및 MenuItem 닫음
                      movePage(e);
                      dropDownClose();
                    }}
                  >
                    {e}
                  </MenuItem>
                ))}
          </Menu>
        </Grid>
      </Grid>
    </Box>
  );
}
