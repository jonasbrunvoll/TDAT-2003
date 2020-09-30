let mysql = require("mysql");

const ArticleDao = require("./articleDao.js");
const CategoryDao = require("./categoryDao.js");
const runsqlfile = require("./runsqlfile.js");

// GitLab CI Pool
let pool = mysql.createPool({
    connectionLimit: 1,
    host: "mysql",
    user: "root",
    password: "secret",
    database: "supertestdb",
    debug: false,
    multipleStatements: true
});

let articleDao = new ArticleDao(pool);
let categoryDao  = new CategoryDao(pool);

beforeAll(done => {
    runsqlfile("src/dao/create_tables.sql", pool, () => {
        runsqlfile("src/dao/create_testdata.sql", pool, done);
    });
});

afterAll(() => {
    pool.end();
});



test("Get one article from db", done => {
    function callback(status, data) {
        console.log(
            "Test callback: status=" + status + ", data=" + JSON.stringify(data)
        );
        expect(data[0].title).toBe("Hei bloggen");
        done();
    }

    articleDao.getOne(1, callback);
});

test("Add article to db", done =>{
    function callback(status, data) {
        console.log(
            "Test callback: status=" + status + ", data=" + JSON.stringify(data)
        );
        expect(data.affectedRows).toBeGreaterThanOrEqual(1);
        done();
    }

    articleDao.creatArticle(
        {title : 'New article', inngress :'Inngress', text : 'hello world', importancy : 1, category : 3, picture : 'Picture'},
        callback
    );
});



test("Get all articles from db", done => {
    function callback(status, data) {
        console.log(
            "Test callback: status=" + status + ", data.length=" + data.length
        );
        expect(data.length).toBeGreaterThanOrEqual(2);
        done();
    }

    articleDao.getAll(callback);
});

test("Update one article from db", done =>{
    function callback(status, data) {
        console.log(
            "Test callback: status=" + status + ", data.length=" + data.length
        );
        expect(data.affectedRows).toBeGreaterThanOrEqual(1);
        done();
    }

    articleDao.updateArticle(

        {title : "Hade bloggen", text : "Saken er oppdatert", picture : "Nytt bilde", id_article : 1 },
        callback
    );

});
test("Delete one article", done =>{
    function callback(status, data) {
        console.log(
            "Test callback: status=" + status + ", data.length=" + data.length
        );
        expect(data.affectedRows).toBeGreaterThanOrEqual(1);
        done();

    }
    articleDao.deleteArticle(
        {id_article : 1},
        callback
    );
});

test("Get all categories from db", done => {
    function callback(status, data) {
        console.log(
            "Test callback: status=" + status + ", data.length=" + data.length
        );
        expect(data.length).toBeGreaterThanOrEqual(1);
        done();
    }
    categoryDao.getAll(callback);
});

