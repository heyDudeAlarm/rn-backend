const Friend = require('../models/Friend');

module.exports.getList = async (req, res, next) => {
    try {
        const user = req.params.id; //get 요청한 사용자 정보
        //user의 친구 리스트를 응답한다!
        const friendList = await Friend.getFriendList(user);
    
        res.status(400).json(friendList[0]);
    } catch (error) {
        res.json(error);
    }
}

module.exports.addUser = async (req, res, next) => {
    const user = req.params;
    
}