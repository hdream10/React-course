import { Link} from "react-router-dom";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
  return (
    <div className="post">
      <Link key={props.post.id} to={`/posts/${props.post.id}`} className="post__content">
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </Link>
      <div className="post__btns">
        <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
      </div>
    </div>
  );
};
export default PostItem;
