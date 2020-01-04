import React , {Component} from "react" ;
import Header from '../Header/Header' ;
import {Link} from 'react-router-dom' ;

class DefaultPage extends Component {

 render(){

      return(
             <Header title="404" styleClass="default-hero">
               <h2 className="text-uppercase text-light italic ">you are in the wrong place</h2>
               <Link to="recipes" className="text-uppercase btn btn-secondary mt-3" >Return recipes</Link>
             </Header>  
      ) ;
 }

}

export default DefaultPage ;