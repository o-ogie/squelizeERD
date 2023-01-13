/*
CREATE TABLE board(
    boardIdx INT PRIMARY KEY AUTO_INCREMENT,
    userid VARCHAR(30) FORIEGN KEY,
    subject VARCHAR(50) NOT NULL,
    contentBoard TEXT,
    registerBoard DATETIME DEFAULT now(),
    hit INT DEFAULT 0
);
*/

module.exports = (sequelize, Sequelize) => {
    class Board extends  Sequelize.Model {
        static initailize() {
            return this.init({
                boardIdx:{
                    type: Sequelize.INTEGER,
                    primaryKey:true,
                    autoIncrement:true,
                },
                userid:{
                    type:Sequelize.STRING(30),
                    allowNull: false,
                },
                subject:{
                    type:Sequelize.STRING(50),
                    allowNull:false,
                },
                contentBoard:{
                    type:Sequelize.TEXT
                },
                registerBoard:{
                    type:Sequelize.DATE,
                    defaultValue:Sequelize.fn('now')
                }
            },{
                sequelize
            })
        }

        static associate(models){
            // this.belongsTo(models.User,{
            //     foreignKey:'userid'
            // })

            this.hasMany(models.Hashtag,{
                foreignKey:'boardIdx',
                constraints: true,
                onDelete: 'cascade'
            })
        }
    }
    Board.initailize()
    return Board
}
