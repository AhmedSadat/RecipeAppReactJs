import React from 'react' ;

const header = ({ styleClass , title , children  })=>{
        
    return(
            <header>
                <div className="container-fluid ">
                    <div className={`row align-items-center ${styleClass}`}>
                        <div className="col text-center">
                            <h1 className="
                              display-3
                              text-light 
                              text-uppercase
                              letter-spacing
                              text-slanted
                               ">  {title} </h1>
                               {children}
                         </div>
                    </div>
                </div>
            </header>
    );
}

header.defaultProps = {
    title:'default title' ,
    styleClass:'header-hero'
}

export default header ;