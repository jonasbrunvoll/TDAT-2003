// @flow
import * as React from 'react';
import { Component } from 'react-simplified';
import {Card} from "./widgets";
import {NavLink} from "react-router-dom";
import {Article, articleService} from "./article";

export class GetAllArticles extends Component {
    articels : Article[] = [];

    render() {
        return (
            <Card>
                {this.articels.map(article => (
                    <div className="card">
                        <NavLink exact to={"/article/" + article.id_article}>
                            <div className="card-body">
                                <h4>{article.title}</h4>
                                <p>{article.text}</p>
                                <img src={article.picture} alt="Could not find the picture" height="200" width="400"/>
                                <p>Sist oppdatert: {article.time.substring(0,16)}</p>
                            </div>
                        </NavLink>

                    </div>
                ))}
            </Card>
        );
    }

    mounted() {
        articleService
            .getAllArticles()
            .then(article => (this.articels = article.reverse()))
            .catch((error: Error) => console.error(error.message));
    }
}