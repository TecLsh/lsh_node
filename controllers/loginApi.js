const APIError = require('../rest').APIError;
module.exports = {
        'POST /api/login': async(ctx,next) => {
        var
            t = ctx.request.body,
            todo;
            console.log(t);
        var todo = {name: '陈厚庆' ,password: '111111'};
        if(t.name.trim() != '陈厚庆'){
            throw new APIError('invalid_input', 'Missing name');
        }
        if(t.password.trim() != '111111'){
            throw new APIError('invalid_input', 'Missing password');
        }
        ctx.rest({data:todo,status:'success'});
    }
}