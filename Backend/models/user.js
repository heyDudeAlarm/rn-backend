const Sequelize = require('sequelize');

class User extends Sequelize.Model {
    static initiate(sequelize){
        User.init({
            email: {
                type: Sequelize.STRING(50),
                allowNull: false,
                unique: false
            },
            nickname: {
                type: Sequelize.STRING(20),
                allowNull: true,
                unique: false
            },
            password: {
                type: Sequelize.STRING(50),
                allowNull: false,
                unique: false
            }
        }, { 
            sequelize,
            modelName: 'User',
            tableName: 'users',
         });
    }
    //associate : 다른 모델과의 관계 작성
    static associate(db){}
};

module.exports = User;