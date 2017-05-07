/**
 * Created by dutao on 2017/5/7.
 */
const mongoose = require( 'mongoose' );
const config = require( '../../public/testConfig.js' )

let db = mongoose.createConnection( config.host , config.database ) ;
//连接测试
db.on ( 'error' , console.error.bind ( console , '连接错误' ) ) ;
db.once ( 'open' , function () {
    console.log( 'mongoDB成功连接' ) ;
} ) ;

export default db;