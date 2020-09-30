//@flow
const Dao = require("./dao.js");

module.exports = class ArticleDao extends Dao {

    getAll(callback : any) {
    super.query("select * from article", [], callback
    );}

    getOne(id_article : ArticleDao, callback : any) { super.query(
        "select * from article where id_article=?", [id_article],
        callback
    );}

    getImportantArticles(id_imp : ArticleDao, callback : any) {super.query(
        "select * FROM article WHERE id_imp = ?", [id_imp],
        callback
    )}

    orderAfterCategories(id_cat : ArticleDao, callback : any){super.query(
        "select * FROM article WHERE id_cat = ?", [id_cat],
        callback
    )}

    creatArticle(json : any, callback : any){
        let val = [json.title, json.inngress, json.text, json.importancy, json.category, json.picture];
        super.query(
            "insert into article (id_article, title, inngress,  text, id_imp, id_cat , picture, time) values (DEFAULT, ?,?,?,?,?,?, CURRENT_TIME )",
            val,
            callback
        );
    }

    updateArticle(json : any, callback : any){
        let val = [json.title, json.inngress ,json.text, json.picture, json.id_article];
        super.query(
            "UPDATE article SET title=?, inngress=?, text=?, picture = ? , time = CURRENT_TIME WHERE id_article=?", val,
            callback
        );

    }

    deleteArticle(id_article : ArticleDao, callback : any){
        super.query(
            "DELETE FROM article WHERE id_article = ?", [id_article],
            callback
        );
    }
};