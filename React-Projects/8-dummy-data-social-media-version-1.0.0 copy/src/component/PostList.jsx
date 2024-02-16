import { useContext,useState } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { postList, addInitialPost } = useContext(PostListContext);
  
  let [getpostLoading,setloading]=useState(false);


  const handleGetPostBtn = () => {
    getpostLoading=true;
    setloading(getpostLoading)
    console.log(getpostLoading)
  

    console.log("Get Post Clicked");
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then(data=>{ addInitialPost(data.posts)
        setloading(false)
      });
      
  };
  console.log(postList);
postList.map(post=>console.log(post.id))
  return (
    <>
      {postList.length === 0 && (
        <WelcomeMessage getPostBtnClicked={handleGetPostBtn} getpostLoading={getpostLoading} ></WelcomeMessage>
      )}
      <div className="post_list_container">
        {postList.map(posts => ( <Post key={posts.id} post={posts}></Post> ))}
      </div>
    </>
  );
};

export default PostList;
