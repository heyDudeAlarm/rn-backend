const pool = require('./database/config');

//getConnection() : Promise 객체 반환
//매번 새로운 연결 객체를 생성할 필요 없이, 미리 생성된 연결 객체를 재사용
pool.getConnection()
.then(conn => {
    console.log('MariaDb 연결 성공');
    //query() : 데이터베이스 쿼리를 실행
    conn.query('SELECT * FROM membertbl')
        .then(rows => {
          console.log("데이터 조회 결과", rows);
          conn.release(); //연결 폴에 연결을 반환
        })
        .catch(err => {
            console.error('데이터 조회 실패: ', err);
            conn.release();
        });
}).catch(err => {
    console.error('MariaDb 연결 실패: ', err);
})