const APIError = require('../rest').APIError;

var gid = 0;

function nextId() {
    gid ++;
    return 't' + gid;
}

var todos = [
    {
        id: nextId(),
        name: 'Learn Git',
        description: 'Learn how to use git as distributed version control'
    },
    {
        id: nextId(),
        name: 'Learn JavaScript',
        description: 'Learn JavaScript, Node.js, NPM and other libraries'
    },
    {
        id: nextId(),
        name: 'Learn Python',
        description: 'Learn Python, WSGI, asyncio and NumPy'
    },
    {
        id: nextId(),
        name: 'Learn Java',
        description: 'Learn Java, Servlet, Maven and Spring'
    }
];
var foods = [
    {
        id: nextId(),
        name: '陈厚庆傻逼',
        description: '陈厚庆大傻逼'
    },
    {
        id: nextId(),
        name: '谭新傻逼',
        description: '谭新大傻逼'
    },
    {
        id: nextId(),
        name: '刘涛傻逼',
        description: '刘涛大傻逼'
    },
    {
        id: nextId(),
        name: '黄杰傻逼',
        description: '黄杰大傻逼'
    }
];
var sports = [
    {
        id: nextId(),
        name: '刘涛最胖',
        description: '刘涛最胖'
    },
    {
        id: nextId(),
        name: '陈厚庆第二胖',
        description: '陈厚庆第二胖'
    },
    {
        id: nextId(),
        name: '黄杰第三胖',
        description: '黄杰第三胖'
    },
    {
        id: nextId(),
        name: '豪哥正好',
        description: '豪哥正好'
    }
];
var studies = [
    {
        id: nextId(),
        name: '刘涛爱玩魔兽',
        description: '就知道打游戏'
    },
    {
        id: nextId(),
        name: '陈厚庆爱吹牛逼',
        description: '陈厚庆就知道打游戏吹牛逼'
    },
    {
        id: nextId(),
        name: '黄杰爱xin菜园',
        description: '不能给我带点菜？'
    },
    {
        id: nextId(),
        name: '豪哥爱学习',
        description: '豪哥贼爱学习，如果你不爱学习，那么豪哥没你这个朋友'
    }
];
module.exports = {
    'GET /api/todos': async (ctx, next) => {
        ctx.rest({
         todos: todos
        });
    },
    'GET /api/foods': async (ctx, next) => {
        ctx.rest({
            foods: foods
        });   
    },
    'GET /api/sports': async (ctx, next) => {
        ctx.rest({
            sports: sports
        });   
    },
    'GET /api/studies': async (ctx, next) => {
        ctx.rest({
            studies: studies
        });   
    },

    'POST /api/todos': async (ctx, next) => {
        var
            t = ctx.request.body,
            todo;
        if (!t.name || !t.name.trim()) {
            throw new APIError('invalid_input', 'Missing name');
        }
        if (!t.description || !t.description.trim()) {
            throw new APIError('invalid_input', 'Missing description');
        }
        todo = {
            id: nextId(),
            name: t.name.trim(),
            description: t.description.trim()
        };
        todos.push(todo);
        ctx.rest(todo);
    },

    'PUT /api/todos/:id': async (ctx, next) => {
        var
            t = ctx.request.body,
            index = -1,
            i, todo;
        if (!t.name || !t.name.trim()) {
            throw new APIError('invalid_input', 'Missing name');
        }
        if (!t.description || !t.description.trim()) {
            throw new APIError('invalid_input', 'Missing description');
        }
        for (i=0; i<todos.length; i++) {
            if (todos[i].id === ctx.params.id) {
                index = i;
                break;
            }
        }
        if (index === -1) {
            throw new APIError('notfound', 'Todo not found by id: ' + ctx.params.id);
        }
        todo = todos[index];
        todo.name = t.name.trim();
        todo.description = t.description.trim();
        ctx.rest(todo);
    },

    'DELETE /api/todos/:id': async (ctx, next) => {
        var i, index = -1;
        for (i=0; i<todos.length; i++) {
            if (todos[i].id === ctx.params.id) {
                index = i;
                break;
            }
        }
        if (index === -1) {
            throw new APIError('notfound', 'Todo not found by id: ' + ctx.params.id);
        }
        ctx.rest(todos.splice(index, 1)[0]);
    }
}