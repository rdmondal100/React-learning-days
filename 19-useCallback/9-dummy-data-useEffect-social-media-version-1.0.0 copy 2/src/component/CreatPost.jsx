import { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";

const CreatPost = () => {

  const {addPost}=useContext(PostListContext);

  const userIdElement= useRef();
  const titleElement= useRef();
  const bodyElement= useRef();
  const reactionsElement= useRef();
  const tagsElement= useRef();

  const handleSubmit=(event)=>{
    event.preventDefault();

    const userId=userIdElement.current.value;
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const reaction = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(' ');
    console.log(tags);
   
  
    addPost(userId,title,body,reaction,tags);
    userIdElement.current.value="";
    titleElement.current.value="";
    bodyElement.current.value="";
    reactionsElement.current.value="";
    tagsElement.current.value="";

  }
  return (
    <form className="creat_post" onSubmit={handleSubmit}>
      
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
         Enter Your User Id Here
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          placeholder="Share your feelings"
          ref={userIdElement}
         
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
         Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Share your feelings"
          ref={titleElement}
         
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
         Post Content
        </label>
        <textarea
          type="text"
          rows="6"
          className="form-control"
          id="body"
          placeholder="Describe your thoughts"
         ref={bodyElement}
        />
      </div>


      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
         Number of Reactions
        </label>
        <input
          type="text"
          rows="6"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to your post"
         ref={reactionsElement}
        />
      </div>



      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
         Enter your hastags here
        </label>
        <input
          type="text"
          rows="6"
          className="form-control"
          id="tags"
          placeholder="Please enter tags usiing space"
         ref={tagsElement}
        />
      </div>


      <button type="submit" className="btn btn-primary">
        Post New
      </button>
    </form>
  );
};
export default CreatPost;
