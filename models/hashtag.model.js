/*
    CREATE TABLE hashtag(
        hashnum foriegnkey,
        contenthash foriegnkey,
        boardIdx foreinkey
    )
*/



module.exports = (sequelize, Sequelize)=> {
    class Hashtag extends Sequelize.Model {
        static initialize(){
            return super.init({
             
            },{
                sequelize
            })
        }

        static associate(models){
            this.belongsTo(models.Sort,{
                foreignKey:'hashNum',
                foreignKey:'contentHash'
            })

            this.belongsTo(models.Board,{
                foreignKey:'boardIdx'
            })
        }

    }
    Hashtag.initialize()
    return Hashtag
}
