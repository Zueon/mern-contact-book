const mongoose = require("mongoose");
const dbUrl = process.env.ATLAS_URI;

var db;

module.exports = {
  connectToServer: function (callback) {
    // mongoose.connect("CONNECTION_STRING") : DB 연결
    mongoose.connect(dbUrl);

    // mongoose의 DB object를 가져와서 db 변수에 저장한다. 해당 db 변수에는 DB관련 이벤트 리스너 함수들이 있다.
    db = mongoose.connection;

    // DB 연결이 성공하면 로그 출력
    // db.once() : 한번만 실행된다. DB 연결은 앱 실행 시 단 한번만 실행되는 이벤트이기 때문에..
    db.once("open", function () {
      console.log("DB connected");
    });

    // db.on() : 에러 이벤트는 다양한 경우에 발생하기 때문에 on 사용
    db.on("error", function (error) {
      console.log("DB ERROR : ", error);
    });
  },

  getDB: function () {
    return db;
  },
};
