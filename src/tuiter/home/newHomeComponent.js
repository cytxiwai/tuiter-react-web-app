import React from 'react';
import TuitsList from '../tuits/index.js';
import WhatsHappening from"./whats-happening";

const NewHomeComponent = () => {
    return(
              <div className="row"
                      style={{"position": "relative"}}>
                 <h4>Home</h4>
                 <WhatsHappening/>
                 <TuitsList/>
              </div>
    );
};
export default NewHomeComponent;