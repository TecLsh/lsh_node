/**
 * Created by dutao on 2017/5/7.
 */
const mongoose = require( 'mongoose' );
import db from '../public/basic.js';

const UserScheam = new mongoose.Schema ( {
    userName : { type : String , unique : true } , //用户名
    password : String , //用户密码
} ) ;

const User =  mongoose.model( 'User', UserScheam );

let UserModel = db.model ( 'User' , UserScheam ) ;

export default UserModel;