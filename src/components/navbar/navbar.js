import React, { Component } from 'react';
import logo from '../../images/logo.svg' ;
import {Link , NavLink} from  'react-router-dom' ;

class Navbar extends Component {

    render() {

        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/"><img src={logo} alt="logo" /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto ">
                        <li className="nav-item">
                            <Link className="nav-link" to="home">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"   to="recipes">Recipes</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default  Navbar ;