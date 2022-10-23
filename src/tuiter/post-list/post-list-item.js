import React from 'react';
import {FaComment, FaHeart, FaRetweet, FaShare, FaEllipsisH} from 'react-icons/fa';
import "./index.css";

const PostListItem = (
    {
    post = {
    "id": "2",
    "userImage": "emusk-2.png",
    "userName": "Elon Musk",
    "handler": "elonmusk",
    "time": "15h",
    "content": "We might need a different name, as this is basically just Starlink with roaming capability, so you can take your terminal anywhere.",
    "comment": " 965",
    "retweets": " 2.4k",
    "likes": " 4k",
    "image": "",
    "origUserImage": "xlogo.jpeg",
    "origUserName": "SpaceX",
    "origHandler": "SpaceX",
    "origTime": "16h",
    "origContent": "Starlink for RV's now has over 100,000 customers! Access high-speed, low-latency internet on an as-needed basis anywhere Sarlink provides active coverage",
    "origLink": "starlink.com/rv"
        }
    }
    ) => {
            return (

                     <li className="list-group-item d-flex flex-row position-relatively">
                     {post.style === "1" ? <h6 className="position-absolute wd-retweet"><FaRetweet className="me-1"/>Elon Musk Retweeted</h6> : null}
                          <div className="d-flex float-start me-2 mt-3">
                              <img alt="" width="40px" height="40px" className="rounded-circle" src={`/images/${post.userImage}`}/>
                           </div>
                          <div className="ms-2 d-flex flex-column mt-3">
                              <div className="d-flex flex-row">
                              <div className="fw-bold">{post.userName} <span className="fw-normal text-secondary">@{post.handler} • {post.time}</span></div>
                              <div className="d-flex flex-fill justify-content-end"><FaEllipsisH/></div>
                              </div>
                              <div>{post.content} {Boolean(post.link) === true ? <span> -> </span> : null}<span className="text-primary">{post.link}</span></div>
                               {post.style === "1" ? <img alt="" src={`/images/${post.image}`} class="w-100 rounded-top mt-2"/> : null}
                               {post.style === "2" ? [
                               <ul className="p-0 mt-2">
                                    <li className="list-group-item rounded">
                                          <div><img alt="" width="20px" height="20px" className="rounded-circle me-2" src={`/images/${post.origUserImage}`}/>
                                             <span className="fw-bold me-2">{post.origUserName} <span className="fw-normal text-secondary">@{post.origHandler} • {post.origTime}</span></span></div>
                                          <div>{post.origContent} <span>{post.origLink}</span></div>
                                    </li>
                               </ul>
                               ] : null}
                               <ul className='d-flex flex-wrap mt-2 list-unstyled'>
                                       <li className="flex-fill"><FaComment className="me-1 mb-1"/>{post.comment}</li>
                                       <li className="flex-fill"><FaRetweet className="me-1 mb-1"/>{post.retweets}</li>
                                       <li className="flex-fill"><FaHeart className="me-1 mb-1"/>{post.likes}</li>
                                       <li className="flex-fill"><FaShare className="me-1 mb-1"/></li>
                               </ul>
                               {post.style === "1" ? <div className="text-primary mt-2">Show this thread</div> : null}

                      </div>
                  </li>
            )
        }

export default PostListItem;