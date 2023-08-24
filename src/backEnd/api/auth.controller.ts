import User, { IUser } from "../models/user";
const { connect } = require("../mongoConnect");
export {};

//회원가입 (Create)
exports.registerUser = async (ctx: any) => {
  const { id, password, phone, nickname } = ctx.request.body;
  const date = new Date();

  // MongoDB 클라이언트 연결
  const collection = await connect();

  try {
    // 중복 사용자 체크 (예: ID 기준)
    const existingUser = await collection.findOne({ id });
    if (existingUser) {
      ctx.status = 400;
      ctx.body = { error: "User with this ID already exists" };
      return;
    }

    // 사용자 정보 저장
    await collection.insertOne({ id, password, phone, nickname, date });
    ctx.status = 201; // Created
    ctx.body = { message: "User registered successfully" };
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: "Error occurred while registering the user." };
    console.error("Error registering user:", error);
  }
};
// 회원목록 조회 (Read)
exports.userlist = (ctx: any) => {
  ctx.body = "회원목록 조회 API";
};

// 단일 회원 정보 조회 (Read)
exports.userinfo = async (ctx: any) => {
  const { username, password } = ctx.request.body;

  const collection = await connect();

  console.log(username, password);
  try {
    const user: IUser | null = await collection.findOne({
      username,
      password,
    });

    console.log(user);

    // user 존재 여부 확인
    if (!user) {
      ctx.status = 400; // Bad Request
      ctx.body = { isValid: false, message: "Invalid username or password" };
      return;
    }

    // 일치하면 true
    ctx.body = {
      isValid: true,
      message: "User found",
      user: username,
      password: password,
    };
  } catch (errorL: any) {
    ctx.status = 500; // Internal Server Error
    ctx.body = {
      isValid: false,
      message: "An error occurred",
      error: errorL.message,
    };
  }
};

// 회원정보수정 (Update)
exports.updateUser = (ctx: any) => {
  ctx.body = "유저 정보 수정 API";
};

// 회원 삭제 (Delete)
exports.deleteUser = (ctx: any) => {
  ctx.body = "유저 정보 삭제 API";
};

// 회원 로그인
exports.login = (ctx: any) => {
  ctx.body = "로그인 API";
};
