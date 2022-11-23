import posts from './posts.js'
import PostItem from './PostItem.js'

const PostItems = () => {
    return(`
        <ul class="list-group">
            <!-- continue here -->
            ${
                posts.map(posts => {
                return(PostItem(posts))}).join('')
            }
        </ul>
        `);
}

export default PostItems;