import { useParams } from "react-router-dom";

const Post = (props) =>{
console.log(props);
const { post_id } = useParams();
//extracting id from url with useParams
const postNumber = parseInt(post_id) - 1;

//converting string to integer, and substracting 1 to count in cs
console.log("PostNumber : " + postNumber);
const post = props[postNumber];

//using cs, id extracted above, putting it into index to select the correct post object.


// console.log({post})
// console.log(post.title)
    return(
        <div className="post">
            <div className="hero">
                <img src = {post.image} alt="post banner" />
            </div>
            <div>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div> 
        </div>
    )
}

export default Post;