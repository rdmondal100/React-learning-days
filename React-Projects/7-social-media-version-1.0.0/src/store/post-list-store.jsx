import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  // console.log(currentPostList)
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter((post) => {
      return post.id !== action.payload.postId;
    });
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  }
  return newPostList;
};

// eslint-disable-next-line react/prop-types
const PostLIstProvider = ({ children }) => {
  const [postList, dispatchreducerPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  // console.log(postList)
  const addPost = (userId, title, body, reaction, tags) => {
    dispatchreducerPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: title,
        body: body,
        reaction: reaction,
        userId: userId,
        tags: tags,
      },
    });
    console.log(userId);
    console.log(title);
    console.log(body);
    console.log(reaction);
    console.log(tags);
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
      value={{ postList: postList, addPost: addPost, deletePost: deletePost }}
    >
      {children}
    </PostListContext.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Started React Journy",
    body: "Hi friends, I have started my new journy wiht React. I want to be an good frontend developer in near future. Pray for me🙏",
    reaction: 100,
    userId: "user-006",
    tags: ["react", "frontend", "developer"],
  },
  {
    id: "2",
    title: "Future of AI",
    body: "Hi friends, i am totally shoked to see the power of ai. The ai is evloving day by day. It is alerming for us in near future. So be ready for this 😵‍💫😵‍💫",
    reaction: 99,
    userId: "user-007",
    tags: ["ai", "danger", "artificial_intellegence"],
  },
];

export default PostLIstProvider;
