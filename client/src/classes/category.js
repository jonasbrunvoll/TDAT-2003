// @flow
import * as React from 'react';
import axios from 'axios';

export class Category {
    id_cat : number = 0;
    name_cat : string = '';
}
export class CategoryService {

    getCategories() : any{
        return axios.get<Category>('http://localhost:8080/category').then(result => result.data);
    }

}
export let categoryService : CategoryService = new CategoryService();