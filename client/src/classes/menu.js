// @flow
import * as React from 'react';
import { Component } from 'react-simplified';
import {Category, categoryService} from "./category";
import {NavBarLink } from "./widgets";


export class Menu  extends Component {
    categories : Category[] = [];
    render() {
        return (
            <nav className="sticky-top navbar navbar-expand navbar-light bg-light">
                <NavBarLink  exact to={"/"}>
                    <span className="navbar-brand">Forside</span>
                </NavBarLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        {this.categories.map(cat => (
                            <li className="nav-item active" key={cat.id_cat}>
                                <NavBarLink exact to ={"/article/category/" + cat.id_cat}>
                                    <span className="navbar-item">
                                        {cat.name_cat}
                                    </span>
                                </NavBarLink>
                            </li>
                        ))}
                    </ul>
                    <div className="collapse navbar-collapse float-lg-right">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <NavBarLink exact to={"/add"}>
                                    <span className="navbar-item">
                                        Skriv en Sak
                                    </span>
                                </NavBarLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
    mounted() {
        categoryService
            .getCategories()
            .then(cat => (this.categories = cat))
            .catch((error: Error) => console.error(error.message));
    }

}