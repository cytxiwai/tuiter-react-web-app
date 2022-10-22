import React from 'react';
import whoArray from './who.json';
import WhoToFollowListItem from './who-to-follow-list-item';

const WhoToFollowList = () => {
    return (
        <ul className="list-group">
            <li claasName="list-group-item">
                <h3>Who to follow</h3>
            </li>
            {
            whoArray.map((who) =>
                <WhoToFollowListItem
                    key={who.userName}
                    who={who}/>

            )
            }
        </ul>
    );
};

export default WhoToFollowList;