const express = require("express");
const app = express();
const fs = require("fs");
//사진______________________________________________________________________________________
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, ".env.local") });

var multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
  },
  filename: function (req, file, cb) {
    // cb(null, file.originalname) // cb 콜백함수를 통해 전송된 파일 이름 설정
    // 파일마다 확장자 현재 날짜시간분초 + 현재 파일의 확장자
    cb(null, new Date().valueOf() + path.extname(file.originalname));
  },
});
var upload = multer({ storage: storage });

//사진______________________________________________________________________________________

//cors
const cors = require("cors");

const corsOption = {
  origin: "http://localhost:8080",
  credentials: true,
};

app.use(cors(corsOption));

// 한번 보낼때 50mb정도 보낸다
app.use(
  express.json({
    limit: "50mb",
  })
);

const server = app.listen(3000, () => {
  var dir = __dirname + "/uploads";
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
  //fs 파일시스템 약자 -> 업로드 폴더가 있냐 없으면 만들어라
  console.log("Server stared. port 3000.");
});

//업로드라는 폴더를 외부에서도 vue클라이언트에서 접속가능한 폴더로 변경시켜주는것
//로컬호스트 스타틱업로드 파일이면 다 접근 가능
app.use("/static", express.static(__dirname + "/uploads"));

// const dbPool = require("mysql").createPool({
//   database: "dev", // dev
//   host: "localhost", //ip 주소
//   user: "root",
//   password: "7777777", //비밀번호
// });

//사진______________________________________________________________________________________

const dbPool = require("mysql").createPool({
  database: process.env.database, // dev
  host: process.env.host, //ip 주소
  port: process.env.port, //ip 주소
  user: process.env.user,
  password: process.env.password, //비밀번호
});

//attachment키이름 -> 무조건 생성해주고 규칙은
app.post("/api/uploadFile", upload.single("attachment"), async (req, res) => {
  console.log(req.file); //파일이름은 뭐고 오리지널은 뭔지
  return res.status(200).json(req.file); //뷰에다가 그 정보를 준다
});

app.delete("/api/deleteFile", async (req, res) => {
  const filePath = path.join(__dirname, "uploads", req.query.filename); //uploads/162 이런 path가 생성된거 넘어옴
  console.log(path);
  fs.unlink(filePath, (err) => {
    //파일위치path 그파일이 존재하는지 파악하고 삭제(unlink)
    if (err) {
      console.error(err);
      res.status(400).json({
        type: "E",
        msg: "파일을 삭제할 수 없습니다. 다시 시도하세요.",
      });
    }

    res.status(200).json({ type: "S", msg: "성공적으로 삭제되었습니다." });
  });
});

//______________________________________________________________________________________

// app.get("/api/getUserList", async (req, res) => {
//   const userList = { data: [{ name: "UiCheon Kim", gender: "Male" }] };
//   res.send(userList);
// });

//sys.db 맨밑에 코드 추가 (async db)
// app.get("/api/:alias", async (req, res) => {
//   try {
//     res.send(await sys.db("list"));
//   } catch (err) {
//     res.status(500).send({
//       error: err,
//     });
//   }
// });

// app.get("/api/:alias", async (req, res) => {
//   try {
//     console.log(req.body.param);
//     res.send(await sys.db(req.params.alias, req.body.param, req.body.where));
//   } catch (err) {
//     res.status(500).send({
//       error: err,
//     });
//   }
// });

let sql = require("./sql.js");

fs.watchFile(__dirname + "/sql.js", (curr, prev) => {
  console.log("sql 변경시 재시작 없이 반영되도록 함.");
  delete require.cache[require.resolve("./sql.js")];
  sql = require("./sql.js");
});

// req.body.param ->
//alias가 아니라 다른 이름도 가능하다
//post일때만  req.body.param이 들어온다
//param이란 키가 들어감 -> req.body.param 에 들어감(배열 등등) where은 아직 안쓰고
app.post("/api/:alias", async (req, res) => {
  try {
    console.log(req.body.param);
    res.send(await sys.db(req.params.alias, req.body.param, req.body.where));
  } catch (err) {
    res.status(500).send({
      error: err,
    });
  }
});

// 우리가 작성한 쿼리를 데이버베이스를 가져오는 것
// sql[alias].query -> sql.js를 실행
// sql[alias].query에서 create person 실행
// alias가 create person이다

//createperson은 alias로, post/get이런것은 2번째로, where은 아직)
const sys = {
  async db(alias, param = [], where = "") {
    return new Promise((resolve, reject) =>
      dbPool.query(sql[alias].query + where, param, (error, rows) => {
        if (error) {
          if (error.code != "ER_DUP_ENTRY") console.log(error);
          resolve({
            error,
          });
        } else resolve(rows);
      })
    );
  },
};
