import { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";

const PostList = () => {
  const { postList } = useContext(PostListContext);

  console.log(postList);
  return (
    <>
      <div className="post_list_container">
        {postList.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </>
  );
};

export default PostList;
