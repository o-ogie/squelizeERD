const config = require("../config")["db"];
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// console.log(config);
// console.log(sequelize);

require("./user.model")(sequelize, Sequelize);
// console.log(sequelize.models); // { User: User }
require("./board.model")(sequelize, Sequelize);
require("./comment.model")(sequelize, Sequelize);
require("./likes.model")(sequelize, Sequelize);
require("./sort.model")(sequelize, Sequelize);
require("./hashtag.model")(sequelize, Sequelize);

const { models } = sequelize;
// models.User.associate(models);
// models.Board.associate(models);

for (const key in models) {
  if (typeof models[key].associate !== "function") continue;
  models[key].associate(models);
}

(async () => {
  await sequelize.sync({ force: true });

  const {
    models: { User, Board, Comment, Likes, Hashtag, Sort },
  } = sequelize;

  await User.create({
    userid: "hsb7722",
    userpw: "7890",
    username: "sangbeom",
    userphone: "010-1234-5678",
    useremail: "7567@naver.com",
    usergender: "남자",
    usernick: "sa2",
  });
  await User.create({
    userid: "admin",
    userpw: "7890",
    username: "관리자",
    userphone: "010-1234-5678",
    useremail: "admin@naver.com",
    usergender: "여자",
    usernick: "sa1",
  });

  await Board.create({
    userid: "hsb7722",
    subject: "게시글1",
    contentBoard: "내용1~~!!",
    hit: "1",
  });
  await Board.create({
    userid: "hsb7722",
    subject: "게시글2",
    contentBoard: "내용2~~!!",
    hit: "5",
  });
  await Board.create({
    userid: "hsb7722",
    subject: "게시글3",
    contentBoard: "내용3~~!!",
    hit: "2",
  });
  await Board.create({
    userid: "admin",
    subject: "게시글4",
    contentBoard: "내용4~~!!",
    hit: "7",
  });
  await Board.create({
    userid: "hsb7722",
    subject: "게시글5",
    contentBoard: "내용5~~!!",
    hit: "1",
  });
  await Board.create({
    userid: "admin",
    subject: "게시글6",
    contentBoard: "내용6~~!!",
    hit: "3",
  });

  await Comment.create({
    boardIdx: 1,
    userid: "admin",
    contentComment: "내용~~!!",
  });
  await Comment.create({
    boardIdx: 1,
    userid: "hsb7722",
    contentComment: "내용2~~!!",
  });
  await Comment.create({
    boardIdx: 2,
    userid: "hsb7722",
    contentComment: "내용3~~!!",
  });
  await Comment.create({
    boardIdx: 2,
    userid: "admin",
    contentComment: "내용4~~!!",
  });
  await Comment.create({
    boardIdx: 2,
    userid: "hsb7722",
    contentComment: "내용5~~!!",
  });

  await Likes.create({
    boardIdx: 1,
    userid: "hsb7722",
    likesNum: "1",
  });
  await Likes.create({
    boardIdx: 2,
    userid: "hsb7722",
    likesNum: "1",
  });
  await Likes.create({
    boardIdx: 4,
    userid: "admin",
    likesNum: "1",
  });

  await Sort.create({
    contentHash: "내용1~~~ㅎㅎ",
  });
  await Sort.create({
    contentHash: "내용2~~~ㅎㅎ",
  });
  await Sort.create({
    contentHash: "내용3~~~ㅎㅎ",
  });
  await Sort.create({
    contentHash: "내용4~~~ㅎㅎ",
  });
  await Sort.create({
    contentHash: "내용5~~~ㅎㅎ",
  });
  await Sort.create({
    contentHash: "내용6~~~ㅎㅎ",
  });

  await Hashtag.create({
    boardIdx: 1,
    hashNum: 1,
    contentHash: "내용1~~~ㅎㅎ",
  });
  await Hashtag.create({
    boardIdx: 1,
    hashNum: 2,
    contentHash: "내용2~~~ㅎㅎ",
  });
  await Hashtag.create({
    boardIdx: 1,
    hashNum: 3,
    contentHash: "내용3~~~ㅎㅎ",
  });
  await Hashtag.create({
    boardIdx: 2,
    hashNum: 3,
    contentHash: "내용3~~~ㅎㅎ",
  });
  await Hashtag.create({
    boardIdx: 2,
    hashNum: 4,
    contentHash: "내용4~~~ㅎㅎ",
  });
  await Hashtag.create({
    boardIdx: 2,
    hashNum: 5,
    contentHash: "내용5~~~ㅎㅎ",
  });
  await Hashtag.create({
    boardIdx: 3,
    hashNum: 6,
    contentHash: "내용6~~~ㅎㅎ",
  });
  await Hashtag.create({
    boardIdx: 4,
    hashNum: 6,
    contentHash: "내용6~~~ㅎㅎ",
  });
  await Hashtag.create({
    boardIdx: 5,
    hashNum: 6,
    contentHash: "내용6~~~ㅎㅎ",
  });
})();

module.exports = {
  sequelize,
  Sequelize,
};
