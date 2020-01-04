import React , {Component} from "react" ;
import Search from '../Search/Search' ;
import RecipeList from '../RecipeList/RecipeList' ;
import {recipeData} from '../../data/tempList' ;

class Recipes extends Component {

     constructor(props){
          super(props) ;
     }

     state = {
          recipes : recipeData , 
          search : ''
     }

     handlechange = (e)=>{

          this.setState({
               search:e.target.value 
          });
     }

     handlesubmit = (e)=>{
         e.preventDefault() ;
     }

 render(){

     

      return(
               <div>
                    <Search change={this.state.handlechange} submit={this.state.handlesubmit}></Search>
                    <RecipeList recipes={this.state.recipes}></RecipeList>
               </div>
      ) ;
 }

}

export default Recipes ;