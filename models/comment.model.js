/*
CREATE TABLE `Comment`(
   commentIdx INT PRIMARY KEY AUTO_INCREMENT,
   boardIdx INT(Board 테이블의 Foreign Key),
   userid VARCHAR(30) (User 테이블의 Foreign Key),
   contentComment TEXT NOT NULL,
   registerComment DATETIME DEFAULT now()
);
*/

module.exports = (sequelize, Sequelize) => {
  class Comment extends Sequelize.Model {
    static initialize() {
      return this.init(
        {
          commentIdx: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
          contentComment: {
            type: Sequelize.TEXT,
            allowNull: false,
          },
          registerComment: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.fn("now"),
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

      // this.belongsTo(models.Board, {
      //   foreignKey: "boardIdx",
      // });
    }
  }

  Comment.initialize();

  return Comment;
};
