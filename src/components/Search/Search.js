import React, { Component } from 'react' ;

class Search extends Component {


    render(){

        return(
            <div className="container">
                <div className="row">
                  <div className="col-10 col-md-8 text-center mx-auto mt-5">
                      <h1 className="text-slanted text-uppercase ">search recipe with{' '}
                        <strong className="text-orange">foodtofork</strong>
                      </h1>
                   <form className="mt-4" >
                       <label htmlFor="search" className="text-capitalize mb-4">
                         types recipes seperated by comma
                       </label>
                       <div className="input-group">
                        <input 
                        type="text" 
                        name="search"
                        className="form-control "
                        placeholder="onion,carrot,zuccinni">
                        </input>
                        <div className="input-group-append">
                            <button 
                            type="submit"
                            className=" bg-primary text-white input-group-text">
                             <i className="fas fa-search"></i>
                            </button>
                        </div>
                       </div>
                   </form>
                  </div>
                </div>
            </div>
        );
    }

}

export default Search ;