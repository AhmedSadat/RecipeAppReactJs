import React , {Component} from "react" ;
import Recipe from '../Recipe/Recipe' ;

class RecipeList extends Component {


    render(){

        return(
        
           <div> 
                <div>hello from RecipeList component</div>
                <Recipe />
            </div>
        );
    }

}

export default RecipeList ;