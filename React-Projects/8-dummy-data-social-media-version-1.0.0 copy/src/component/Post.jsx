/* eslint-disable react/prop-types */
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { PiShareFat } from "react-icons/pi";
import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { PostListContext } from "../store/post-list-store";

const Post = ({ post }) => {

  const { deletePost } = useContext(PostListContext);

  return (
    <div className="card" style={{ width: "28rem" }}>
      <button className="position-absolute btn btn-secondary top-0 start-100 translate-middle badge " onClick={()=>deletePost(post.id)} > 
        <MdDelete ></MdDelete>
        <span className="visually-hidden">unread messages</span>
      </button>

      <div src="..." className="card-img-top" alt="...">
        {post.userId}
      </div>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <div className="tags">
          {post.tags.map((tag, index) => {
            return (
              <div key={index} className="badge text-bg-primary tag">
                {tag}
              </div>
            );
          })}
        </div>
        <p className="card-text">{post.body}</p>
      </div>
      <div className="post_insites">
        <div className="reactions_container">
          <div>
            <button
              type="button"
              className="reaction btn btn-light ml-3 btn btn-primary position-relative d-flex"
            >
              <AiOutlineLike></AiOutlineLike> <span className="like">Like</span>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {post.reactions}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </div>
        </div>
        <button className="comment btn btn-light d-flex">
          <FaRegComment></FaRegComment> <span className="like"> Comment</span>
        </button>
        <button className="share btn btn-light d-flex ">
          <PiShareFat></PiShareFat> <span className="like"> Share</span>
        </button>
      </div>
    </div>
  );
};

export default Post;
