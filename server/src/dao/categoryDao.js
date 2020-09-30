//@flow
const Dao = require("./dao.js");

module.exports = class CategoryDao extends Dao{
    getAll(callback : any) {
        super.query("select * from category", [], callback
        );
    }

};