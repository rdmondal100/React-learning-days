import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addInitialPost:()=>{},
});

const postListReducer = (currentPostList, action) => {
  // console.log(currentPostList)
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter((post) => {
      return post.id !== action.payload.postId;
    });
  }
   else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  }

   else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = [...action.payload.posts];
  }
  return newPostList;
};

// eslint-disable-next-line react/prop-types
const PostLIstProvider = ({ children }) => {
  const [postList, dispatchreducerPostList] = useReducer(
    postListReducer,
    []
  );
  // console.log(postList)
  const addPost = (userId, title, body, reactions, tags) => {
    dispatchreducerPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: title,
        body: body,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };
  const addInitialPost = (posts) => {
    dispatchreducerPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts:posts,
      },
    });
  };

  const deletePost = (postId) => {
    console.log("Delete Post Id: " + postId);
    dispatchreducerPostList({
      type: "DELETE_POST",
      payload: {
        postId: postId,
      },
    });
  };

  return (
    <PostListContext.Provider
      value={{ postList: postList, addPost: addPost, deletePost: deletePost,addInitialPost }}
    >
      {children}
    </PostListContext.Provider>
  );
};


export default PostLIstProvider;
