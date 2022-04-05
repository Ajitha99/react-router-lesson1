//React router has a hook called useNavigate from react-router-dom
//it can give a way to add path or link to certian page. 
import {useNavigate} from "react-router-dom"

function PostCard(props){
    const navigate = useNavigate();
    return(
        <div className ="item" key={props.id}>
            <img src={props.image} alt="Post Banner"/>
            <div className="modal">
                <h3>{props.title}</h3>
                <button onClick={() => navigate(`/posts/${props.id}`)} >Read More</button>
            </div>
        </div>
    )
}

export default PostCard;