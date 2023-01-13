/*
    CREATE TABLE hashtag(
        hashnum foriegnkey,
        contenthash foriegnkey,
        boardIdx foreinkey
    )
*/

module.exports = (sequelize, Sequelize) => {
  class Hashtag extends Sequelize.Model {
    static initialize() {
      return this.init(
        {
          hashNum: {
            type: Sequelize.INTEGER,
            references: {
              model: sequelize.models.Sort,
              key: "hashNum",
            },
          },
        },
        {
          sequelize,
        }
      );
    }

    static associate(models) {
      // this.belongsTo(models.Sort,{
      //     foreignKey:'hashNum',
      // })

      this.belongsTo(models.Board, {
        foreignKey: "boardIdx",
      });
    }
  }
  Hashtag.initialize();
  return Hashtag;
};
