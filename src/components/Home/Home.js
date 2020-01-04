import React , {Component} from 'react' ;
import Header from '../Header/Header' ;
import {Link} from 'react-router-dom'


class Home extends Component {

    render(){

        return( 
             <div>
                     <Header title="amazing recipes">
                         <Link
                          to="recipes"
                          className="
                         btn
                          btn-secondary
                           text-uppercase
                            btn-larg 
                            mt-3" >serch recipes </Link>
                         </Header>
             </div>
                 
        );
    }
}

export default Home ;