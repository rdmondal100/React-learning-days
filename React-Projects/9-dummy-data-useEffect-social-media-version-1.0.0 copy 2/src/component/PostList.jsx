import { useContext, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import { useEffect } from "react";
import Loading from "./Loading";

const PostList = () => {
  const { postList, addInitialPost } = useContext(PostListContext);

  let [getpostLoading, setloading] = useState(false);

  // const [dataFached,setDataFached]= useState(false)

  // if(!dataFached){
  //   setloading(true)
  // fetch("https://dummyjson.com/posts")
  //   .then((res) => res.json())
  //   .then(data=>{ addInitialPost(data.posts)
  //     setloading(false)
  //   });
  //     setDataFached(true)
  // }

  useEffect(() => {
    setloading(true);

    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts",{signal})
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
        setloading(false);
      });


      return ()=>{
        console.log("Cleaning up useEffect");
        controller.abort();
      }

  }, []);


  return (
    <>
    
      {getpostLoading && <Loading></Loading>}
      {!getpostLoading && postList.length === 0 && (
        <WelcomeMessage getpostLoading={getpostLoading}></WelcomeMessage>
      )}
      {!getpostLoading && (
        <div className="post_list_container">
          {postList.map((posts) => (
            <Post key={posts.id} post={posts}></Post>
          ))}
        </div>
      )}
    </>
  );
};

export default PostList;
