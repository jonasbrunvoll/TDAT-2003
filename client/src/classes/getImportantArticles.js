// @flow
import * as React from 'react';
import { Component } from 'react-simplified';
import {Card} from "./widgets";
import {Article, articleService} from "./article";
import {NavBarLink} from "./widgets";

export class GetImportantArticles extends Component {
    articles : Article[] = [];


    render() {

        return (
            <div className="card">
                    <marquee direction="left">
                        <ul>
                            {this.articles.map(article => (
                                <li key={article.id_article}>
                                    <NavBarLink  exact to={"/article/" + article.id_article}>
                                        <p>{article.title}  (Sist oppdatert: {article.time.substring(0,16)})</p>
                                    </NavBarLink>
                                </li>

                            ))}
                        </ul>
                    </marquee>

                <div className="card-body">
                    <Card>
                        {this.articles.map(article => (
                            <div className="card" key={article.id_article}>
                                <NavBarLink exact to={"/article/" + article.id_article}>
                                    <img className="card-img-top" src={article.picture} alt="Could not find the picture"/>
                                    <div className="card-body">
                                        <div className="card-title">
                                            <h3>{article.title}</h3>
                                        </div>
                                        <div className="card-text">
                                            <p>{article.inngress}</p>
                                        </div>
                                        <div className="card-footer">
                                            <p>Sist oppdatert: {article.time.substring(0,16)}</p>
                                        </div>
                                    </div>
                                </NavBarLink>

                            </div>
                        ))}
                    </Card>
                </div>
            </div>
        );
    }

    mounted() {
        articleService
            .getImportantArticles(1)
            .then(article => (this.articles = article.reverse()))
            .catch((error: Error) => console.error(error.message));
    }
}
