// @flow
import * as React from 'react';
import { Component } from 'react-simplified';
import { Alert} from "./widgets";
import {Article, articleService} from "./article";
import { createHashHistory } from 'history';
import {NavBarLink} from "./widgets";

const history = createHashHistory();

export class GetOneArticle extends Component<{ match: { params: { id_article: number } } }> {
    article : Article = null;
    render() {
        if (this.article === null){
            return null;
        }else{
            console.log(this.article);
            return (
                <div className="card background">
                    <div className="card-body card_box">
                        <div className="card-body oneArticle ">
                            <img className="card-img-top picture" src={this.article.picture} alt="Could not find the picture"/>
                            <div className="card-body">
                                <div className="card-title">
                                    <h3>{this.article.title}</h3>
                                </div>
                                <div className="card-text">
                                    <p>{this.article.inngress}</p>
                                </div>
                                <div className="card-text">
                                    <p>{this.article.text}</p>
                                </div>
                                <div className="card-footer">
                                    <p>Sist oppdatert: {this.article.time.substring(0,16)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form className="form-horizontal">
                        <fieldset>

                            <legend>Rediger sak</legend>

                            <div className="form-group">
                                <div className="col-md-8">
                                    <button className="btn btn-primary">
                                        <NavBarLink exact to={"/edith/" + this.article.id_article}>
                                            Skriv om sak
                                        </NavBarLink>
                                    </button>
                                    <button className="btn btn-danger" onClick={this.delete}>
                                        Slett
                                    </button>
                                </div>
                            </div>

                        </fieldset>
                    </form>
                </div>
            );
        }
    }

    mounted() {
        console.log(this.props.match.params.id_article);
        articleService
            .getOneArticle(this.props.match.params.id_article)
            .then(article => (this.article = article))
            .catch((error: Error) => console.error(error.message));
    }

    delete(){
        console.log('id_article: ' +this.props.match.params.id_article);
        articleService
            .deleteArticle(this.props.match.params.id_article)
            .then(() => {
                history.push("/");
                Alert.success("Sak slettet.");
            })
            .catch((error : Error) => console.log(error.message))
    }
}