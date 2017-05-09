/**
 * Created by dutao on 2017/5/7.
 */
const APIError = require('../rest').APIError;
import UserModel from '../src/models/user';

/*
* 数据操作
* */

/*
* 页面操作
* */

/*测试页面*/
module.exports = {
    'GET /index': async(ctx,next) => {
        ctx.render( '../dist/index.html' );
    }
}