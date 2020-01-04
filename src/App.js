import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import SingleRecipe from './components/Recipes/SingleRecipe/SingleRecipe' ;
import Recipes from './components/Recipes/Recipes' ;
import DefaultPage from './components/DefaultPage/DefaultPage' ;
import { BrowserRouter , Route , Switch } from 'react-router-dom';
import Home from './components/Home/Home' ;
import Navbar from './components/navbar/navbar';

class App extends Component {
  render() {
    return (   
        <BrowserRouter>
        <Navbar />
               <main>
                 <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/recipes" component={Recipes} />
                    <Route path="/recipes/:id" component={SingleRecipe} />
                    <Route component={DefaultPage} />
                  </Switch>
               </main>
       </BrowserRouter>       
    );
  }
}

export default App;
