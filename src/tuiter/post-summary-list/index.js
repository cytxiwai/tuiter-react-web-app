import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import PostSummaryItem
  from "./post-summary-item";
import {findTuitsThunk} from "../../services/tuits-thunks.js";

const PostSummaryList = () => {
const {tuits, loading} = useSelector((state) => state.tuitsData)
console.log("postArray")
console.log(tuits)
const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk())
  }, [dispatch])

 return(
   <ul className="list-group">
     {
        loading &&
        <li className="list-group-item">
            loading...
        </li>
     }
     {
       tuits.map((post) =>
         <PostSummaryItem
           key={post._id} post={post}/> )
     }
   </ul>
 );
};
export default PostSummaryList;