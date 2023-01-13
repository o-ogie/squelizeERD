/*
CREATE TABLE `User`(
   userid VARCHAR(30) PRIMARY KEY,
   userpw VARCHAR(64) NOT NULL,
   username VARCHAR(50) NOT NULL,
   userphone VARCHAR(20) NOT NULL,
   useremail VARCHAR(30) NOT NULL,
   usergender VARCHAR(2) NOT NULL,
   usernick VARCHAR(50) UNIQUE NOT NULL
);
*/

module.exports = (sequelize, Sequelize) => {
  class User extends Sequelize.Model {
    static initialize() {
      return this.init(
        {
          userid: {
            type: Sequelize.STRING(30),
            primaryKey: true,
          },
          userpw: {
            type: Sequelize.STRING(64), // 영어 기준으로 64글자를 허용한다는 의미
            allowNull: false,
          },
          username: {
            type: Sequelize.STRING(50),
            allowNull: false,
          },
          userphone: {
            type: Sequelize.STRING(20),
            allowNull: false,
          },
          useremail: {
            type: Sequelize.STRING(30),
            allowNull: false,
          },
          usergender: {
            type: Sequelize.STRING(2),
            allowNull: false,
          },
          usernick: {
            type: Sequelize.STRING(50),
            unique: true,
            allowNull: false,
          },
        },
        {
          sequelize,
        }
      );
    }

    // static associate(models) {
    //   this.hasMany(models.Board, {
    //     foreignKey: "userid",
    //   });
    // }

    static associate(models) {
      this.hasMany(models.Comment, {
        foreignKey: "userid",
        onDelete: "cascade",
      });

      this.hasMany(models.Likes, {
        foreignKey: "userid",
        onDelete: "cascade",
      });
    }
  }

  User.initialize();

  return User;
};
