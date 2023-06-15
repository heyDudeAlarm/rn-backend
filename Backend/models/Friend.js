// Friend List 
const connection = require('../database/config');
const Friend = {};

Friend.getFriendList = (userId) => {
    return new Promise((resolve, reject) => {
        let JOIN = 'JOIN users ON friend_list.friend = users.user_id';
        let WHERE = `WHERE friend_list.user = ${userId}`;

        const sql = `SELECT friend_list.friend "user_id", users.nickname
        FROM friend_list
        JOIN users ON friend_list.friend = users.user_id
        WHERE friend_list.user = ${userId};`;
        connection.query(sql)
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