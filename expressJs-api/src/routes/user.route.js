const controller = require ('../controllers/user.controller');

const user = (app) =>{
    app.get("/api/user/getList",controller.getList);
    app.get("/api/user/getOne/:id",controller.getOne);
    app.post("/api/user/create",controller.create);
    app.put("/api/user/update",controller.update);
    app.delete("/api/user/remove/:id",controller.remove);
}
module.exports = user;