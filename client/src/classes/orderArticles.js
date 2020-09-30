// @flow
import * as React from 'react';
import { Component } from 'react-simplified';
import {Card, NavBarLink} from "./widgets";
import {Article, articleService} from "./article";


export class OrderArticles extends Component {
    articels : Article[] = [];

    render() {
        return (
            <Card>
                {this.articels.map(article => (
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
        );
    }

    mounted() {
        console.log(this.props.match.params.id_cat);
        articleService
            .orderArticlesAfterCategory(this.props.match.params.id_cat)
            .then(article => (this.articels = article.reverse()))
            .catch((error: Error) => console.error(error.message));
    }
}