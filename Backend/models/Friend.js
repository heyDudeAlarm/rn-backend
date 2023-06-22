// Friend List 
const connection = require('../database/config');
const Friend = {};

Friend.getFriendList = (userId) => {
    return new Promise((resolve, reject) => {






let sql = 'SELECT users.* FROM users JOIN friend_list ON users.user_id = friend_list.friend WHERE friend_list.user = ?';
        connection.query(sql,[userId])
            .then(rows => resolve(rows))
            .catch(err => reject(err))
    })
}

module.exports = Friend;
// CREATE TABLE frined_list (
// 	friend_id INT auto_increment primary key,
//     user INT,
//     friend INT,
//     FOREIGN KEY (user) REFERENCES users(user_id),
// 	FOREIGN KEY (friend) REFERENCES users(user_id)
// );
