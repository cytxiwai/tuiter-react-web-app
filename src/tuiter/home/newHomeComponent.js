import React from 'react';
import TuitsList from '../tuits/index.js';

const NewHomeComponent = () => {
    return(
              <div className="row"
                      style={{"position": "relative"}}>
                 <TuitsList/>
              </div>
    );
};
export default NewHomeComponent;