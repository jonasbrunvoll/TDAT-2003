// @flow
import * as React from 'react';
import { Component } from 'react-simplified';
import {InputCard} from "./widgets";
import {Alert, Card} from "./widgets";
import {Category, categoryService} from "./category";
import {Article, articleService} from "./article";

import { createHashHistory } from 'history';

const history = createHashHistory();

export class AddArticle extends Component {

    categories : Category[] = [];
    article : Article = new Article();

    render() {
        const category = this.categories.map(cat =>{
            return (
                <option
                    key={cat.id_cat}
                    value={cat.id_cat}>
                    {cat.name_cat}
                </option>
            );
        });
        return (
            <Card>
                <InputCard>
                    <input
                        type="text"
                        value={this.article.title}
                        className="form-control"
                        placeholder="Tittel"
                        onChange={(event: SyntheticInputEvent<HTMLInputElement>) => (this.article.title = event.target.value)}
                    />
                </InputCard>
                <InputCard>
                    <textarea
                        type="text"
                        value={this.article.inngress}
                        className="form-control"
                        placeholder="Inngress"
                        onChange={(event: SyntheticInputEvent<HTMLInputElement>) => (this.article.inngress = event.target.value)}
                    />
                </InputCard>
                <InputCard>
                    <textarea
                        type="text"
                        value={this.article.text}
                        className="form-control"
                        placeholder="Tekst"
                        onChange={(event: SyntheticInputEvent<HTMLInputElement>) => (this.article.text = event.target.value)}
                    />
                </InputCard>
                <InputCard>
                    <input
                        type="radio"
                        value={this.article.importancy}
                        onChange={() => (this.article.importancy = 1)}
                    />
                    <p>Viktig</p>
                </InputCard>

                <InputCard>
                    <input
                        type="radio"
                        value={this.article.importancy}
                        onChange={() => (this.article.importancy = 2)}
                    />
                    <p>Uviktig</p>
                </InputCard>
                <InputCard>
                    <form className="form-horizontal">
                        <fieldset>
                            <div className="form-group">
                                <div className="col-md-4">
                                    <select onChange={this.handleCategoryChange}  className="form-control" >
                                        {category}
                                    </select>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </InputCard>
                <InputCard>
                    <input
                        type="text"
                        value={this.article.picture}
                        className="form-control"
                        placeholder="Bilde-lenke"
                        onChange={(event: SyntheticInputEvent<HTMLInputElement>) => (this.article.picture = event.target.value)}

                    />
                </InputCard>
                <InputCard>
                    <button type="button" className="btn btn-primary btn-lg" onClick={this.buttonClicked}>Publiser</button>
                </InputCard>

            </Card>

        );

    }
    mounted()  {
        categoryService
            .getCategories()
            .then(cat => (this.categories = cat))
            .then(() => {
                console.log(this.categories.map(e => e.id_cat))
            })
            .catch((error: Error) => console.error(error.message));
    }

    /*
    handleCategoryChange = (event)  => {
        this.article.category = event.target.value;
    };
    
     */

    buttonClicked() {
        console.log('Category: '+this.article.category);
        console.log('Importancy: '+this.article.importancy);
        articleService
            .addArticle(this.article)
            .then(response => response.data)
            .then(() => {
                history.push("/");
                Alert.success("Sak publisert.")
            })
            .catch((error : Error) => console.log((error.message)));
    }
}

