//@flow
import * as React from 'react';
import {Alert, Card} from "./widgets";
import {InputCard} from "./widgets";
import {Component } from 'react-simplified';
import {Article, articleService} from "./article";
import { createHashHistory } from 'history';

const history = createHashHistory();


export class EdithArticle extends Component<{ match: { params: { id_article: number } } }>{
    article : Article = null;

    render() {
        if (!this.article) {
            return null
        } else {
            return (
                <Card>
                    <InputCard>
                        <input
                            type="text"
                            className="form-control"
                            value={this.article.title}
                            onChange={(event: SyntheticInputEvent<HTMLInputElement>) => {
                                if (this.article) this.article.title = event.target.value;
                            }}

                        />
                    </InputCard>
                    <InputCard>
                        <textarea
                            type="text"
                            className="form-control"
                            value={this.article.inngress}
                            onChange={(event: SyntheticInputEvent<HTMLInputElement>) => {
                                if (this.article) this.article.inngress = event.target.value;
                            }}

                        />
                    </InputCard>
                    <InputCard>
                        <textarea
                            type="text"
                            className="form-control"
                            value={this.article.text}
                            onChange={(event: SyntheticInputEvent<HTMLInputElement>) => {
                                if (this.article) this.article.text = event.target.value;
                            }}

                        />
                    </InputCard>
                    <InputCard>
                        <input
                            type="text"
                            value={this.article.picture}
                            className="form-control"
                            onChange={(event: SyntheticInputEvent<HTMLInputElement>) => {
                                if (this.article) this.article.picture = event.target.value;
                            }}

                        />
                    </InputCard>
                    <InputCard>
                        <button type="button" className="btn btn-primary btn-lg" onClick={this.save}>Lagre
                        </button>
                    </InputCard>

                </Card>

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

    save() {
        console.log(this.article);
        articleService
            .updateArticle(this.article)
            .then(() => {
                history.push("/");
                Alert.success("Sak oppdatert.");
            })
            .catch((error: Error) => Alert.danger(error.message));
    }

}