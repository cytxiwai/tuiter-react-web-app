import React from 'react';
import PostList from '../post-list';

const HomeComponent = () => {
    return(
              <div className="row"
                      style={{"position": "relative"}}>
                 <PostList/>
              </div>
    );
};
export default HomeComponent;