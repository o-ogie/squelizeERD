/*
CREATE TABLE `Likes`(
   boardIdx INT(Board 테이블의 Foreign Key),
   userid VARCHAR(30) (User 테이블의 Foreign Key),
   likesNum INT NOT NULL
);
*/

module.exports = (sequelize, Sequelize) => {
  class Likes extends Sequelize.Model {
    static initialize() {
      return this.init(
        {
          likesNum: {
            type: Sequelize.INTEGER,
            allowNull: false,
          },
        },
        {
          sequelize,
        }
      );
    }

    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "userid",
        onDelete: "cascade",
      });

      //  this.belongsTo(models.Board, {
      //  foreignKey: "boardIdx",
      // });
    }
  }

  Likes.initialize();

  return Likes;
};
