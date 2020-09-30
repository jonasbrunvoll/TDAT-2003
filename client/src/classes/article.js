// @flow
import * as React from 'react';
import axios from 'axios';

export class Article {
    id_article: number = 0;
    title : string = '';
    inngress : string ='';
    text: string = '';
    importancy: number = 0;
    category: number = 0;
    picture: string = '';
    time: string = '';

    constructor(id_article : number ,title : string, inngress : string, text : string, importancy : number, category : number, picture : string, time : string){
        this.id_article = id_article;
        this.title = title;
        this.inngress = inngress;
        this.text = text;
        this.importancy = importancy;
        this.category = category;
        this.picture = picture;
        this.time = time;
    }
}



export class ArticleService {

    getAllArticles(){
        return axios.get<Article>('http://localhost:8080/article').then(response => response.data);
    }

    getOneArticle(id : number){
        return axios.get<Article>('http://localhost:8080/article/' + id).then(respons => respons.data[0]);
    }

    getImportantArticles(id_imp : number){
       return axios.get<Article>('http://localhost:8080/article/importancy/' + id_imp).then(result => result.data);

    }

    addArticle(article : Article ){
        return axios.post('http://localhost:8080/article', {
            title : article.title,
            inngress : article.inngress,
            text: article.text,
            importancy: article.importancy,
            category: article.category,
            picture: article.picture,
            time: article.time
        })
            .then(result => result.data);
    }

    orderArticlesAfterCategory( id_cat : number){
        return axios.get<Article>('http://localhost:8080/article/category/' + id_cat).then(result => result.data);
    }

    updateArticle(article : Article){
        return axios({
            method: "put",
            url : "http://localhost:8080/article",
            data : {
                id_article : article.id_article,
                title : article.title,
                inngress : article.inngress,
                text : article.text,
                picture: article.picture,
            }

        })
            .then(result => result.data);
    }

    deleteArticle(id_article : number){
        return axios.delete<Article>('http://localhost:8080/article/' + id_article).then(result => result.data);
    }
}
export let articleService = new ArticleService();








