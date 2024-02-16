import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Sidebar from "./component/Sidebar";
import CreatPost from "./component/CreatPost";
import PostList from "./component/PostList";
import PostLIstProvider from "./store/post-list-store";
import { useState } from "react";
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
console.log(selectedTab)
  return (
    <>
    <PostLIstProvider>
      <div className="app-container">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>

        <div className="content">
          <Header></Header>
          {selectedTab==="Home"?<PostList></PostList>:<CreatPost></CreatPost>}
          
          <Footer></Footer>
        </div>
      </div>
      </PostLIstProvider>
    </>
  );
}

export default App;
