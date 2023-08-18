export {};

//회원가입 (Create)
exports.createUser = (ctx: any) => {
  ctx.body = "회원 생성 API";
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
