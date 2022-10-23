import React from 'react';
import PostArray from './post.json';
import PostListItem from './post-list-item';

const PostList = () => {
    return (
        <ul className="list-group ms-1">
            {
            PostArray.map((post) =>
                <PostListItem
                    key={post.id}
                    post={post}/>)
            }
        </ul>
    );
};

export default PostList;