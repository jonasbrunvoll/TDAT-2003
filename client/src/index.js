// @flow
/* eslint eqeqeq: "off" */

import ReactDOM from 'react-dom';
import * as React from 'react';
import { HashRouter, Route} from 'react-router-dom';
import {Alert} from './classes/widgets';
import {Menu} from "./classes/menu";
import {GetOneArticle} from "./classes/getOneArticle";
import {AddArticle} from "./classes/addArticle";
import {GetImportantArticles} from "./classes/getImportantArticles";
import {OrderArticles} from "./classes/orderArticles";
import {EdithArticle} from "./classes/edithArticle";



const root = document.getElementById('root');
if (root)
  ReactDOM.render(
      <HashRouter>
        <div>
          <Alert/>
          <Menu/>
          <Route exact path="/" component={GetImportantArticles} />
          <Route exact path="/article/category/:id_cat" component={OrderArticles}/>
          <Route exact path="/article/:id_article" component={GetOneArticle}/>
          <Route exact path="/add" component={AddArticle} />
          <Route exact path="/edith/:id_article" component={EdithArticle}/>
        </div>
      </HashRouter>,
      root
  );


