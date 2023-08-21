const { MongoClient, ServerApiVersion } = require("mongodb");

// 몽고 접속 URI
const uri =
  "mongodb+srv://seunghyun:1111@auth.5vjywda.mongodb.net/?retryWrites=true&w=majority";

// MongoClient는 DB 연결을 관리하는 객체
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    // 상단 version 외의 기능 사용 제한
    strict: true,
    // deprecated API 호출 시 오류를 출력해줌
    deprecationErrors: true,
  },
});

export async function connect() {
  try {
    await client.connect();
    // Ping을 보내 연결이 잘 됐늕 ㅣ확인
    await client.db("Auth").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
    throw err;
  }
  // finally {
  //   // 연결이 완료되거나 에러가 나면 연결 종료.
  //   await client.close();
  // }

  return client;
}
module.exports = { connect };
