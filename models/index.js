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
// require("./board.model")(sequelize, Sequelize);
require("./comment.model")(sequelize, Sequelize);
require("./likes.model")(sequelize, Sequelize);

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
    models: { User, Comment, Likes },
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

  await Comment.create({
    userid: "admin",
    contentComment: "내용~~!!",
  });
  await Comment.create({
    userid: "hsb7722",
    contentComment: "내용2~~!!",
  });
  await Comment.create({
    userid: "hsb7722",
    contentComment: "내용3~~!!",
  });
  await Comment.create({
    userid: "admin",
    contentComment: "내용4~~!!",
  });
  await Comment.create({
    userid: "hsb7722",
    contentComment: "내용5~~!!",
  });

  await Likes.create({
    userid: "hsb7722",
    likesNum: "1",
  });
  await Likes.create({
    userid: "hsb7722",
    likesNum: "1",
  });
  await Likes.create({
    userid: "admin",
    likesNum: "1",
  });
})();

module.exports = {
  sequelize,
  Sequelize,
};
