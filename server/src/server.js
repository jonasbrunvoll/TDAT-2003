let express = require("express");
let mysql = require("mysql");
let app = express();
let bodyParser = require("body-parser");
app.use(bodyParser.json()); // for å tolke JSON
let cors = require('cors');
const ArticleDao = require("./dao/articleDao.js");
const CategoryDao = require("./dao/categoryDao.js");


let pool = mysql.createPool({
    host: "xxxxxxxxxxxx",
    "user": "xxxxxxxxxxxx",
    "password": "xxxxxxxxxxxx",
    "database": "xxxxxxxxxxxx",
    "multipleStatements": true

});

let articleDao = new ArticleDao(pool);
let categoriesDao = new CategoryDao(pool);

app.use(cors());
app.get('/products/:id', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
})
app.listen(80, function () {
    console.log('CORS-enabled web server listening on port 80')
})


app.get("/article", (req, res) => {
    console.log("Request from client");
    articleDao.getAll((status, data) => {
        res.status(status);
        res.json(data);
    });
});

app.get("/article/:id_article", (req, res) => {
    console.log("Request from client");
    console.log("GET ONE ARTICLE");
    articleDao.getOne(req.params.id_article, (status, data) => {
        res.status(status);
        res.json(data);
    });
});


app.get("/article/importancy/:id_imp", (req, res) => {
    console.log("Request from client");
    console.log("GET IMPORTANT ARTICLES");
    articleDao.getImportantArticles(req.params.id_imp, (status, data) => {
        res.status(status);
        res.json(data);
    });
});

app.get("/article/category/:id_cat", (req, res) =>{
    console.log("Request from client");
    console.log("ORDER ARTICLES AFTER CATEGORY");
    articleDao.orderAfterCategories(req.params.id_cat, (status, data) => {
        res.status(status);
        res.json(data);
    });
});

app.post("/article", (req, res ) => {
    console.log("Fikk POST-request fra klienten");
    articleDao.creatArticle(req.body, (status, data) =>{
        res.status(status);
        res.json(data);
    })

});

app.put("/article", (req, res) => {
    console.log("PUT-request from client");
    articleDao.updateArticle(req.body, (status, data) =>{
        res.status(status);
        res.json(data);
    });
});

app.get("/category", (req, res) => {
    console.log("Get all categories");
    categoriesDao.getAll((status, data) => {
        res.status(status);
        res.json(data);
    });
});


app.delete("/article/:id_article", (req, res) => {
    console.log("DELETE-request from client");
    articleDao.deleteArticle(req.params.id_article, (status, data) =>{
        res.status(status);
        res.json(data);
    });
});

app.listen(8080, () => console.log('Server is running'));