const { connect } = require("../mongoConnect");
export {};

//회원가입 (Create)
exports.registerUser = async (ctx: any) => {
  const { id, password, phone, nickname } = ctx.request.body;
  const date = new Date();
  // MongoDB 클라이언트 연결
  const client = await connect();
  // MBTI 데이터베이스 접근
  const db = client.db("MBTI");
  // Auth 컬렉션 접근
  const collection = db.collection("Auth");
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
exports.userinfo = (ctx: any) => {
  ctx.body = "유저 정보 조회 API";
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
