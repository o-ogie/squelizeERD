/*
    CREATE TABLE sort(
        hashnum INT PRIMARY KEY AUTO_INCREMENT,
        contenthash VARCHAR(30) NOT NULL
    );
*/

module.exports = (sequelize,Sequelize) => {
    class Sort extends Sequelize.Model {
        static initialize(){
            return this.init({
                hashNum:{
                    type:Sequelize.INTEGER,
                    primaryKey:true,
                    autoIncrement:true,
                },
                contentHash:{
                    type:Sequelize.STRING(30),
                    allowNull:false
                }
            },{
                sequelize
            })
        }

        static associate(models){
            this.hasMany(models.Hashtag,{
                foriegnKey:'hashNum',
                foriegnKey:'contentHash'
            })
        }
    }
    Sort.initialize()
    return Sort
}
