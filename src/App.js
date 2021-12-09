import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            exact
            path="/dialogs"
            element={
              <Dialogs
                dialogs={props.state.dialogsPage.dialogs}
                messages={props.state.dialogsPage.messages}
                updateNewMessageText={props.updateNewMessageText}
                addMessage={props.addMessage}
                newMessageText={props.state.dialogsPage.newMessageText}
              />
            }
          />
          <Route
            exact
            path="/profile"
            element={
              <Profile
                posts={props.state.profilePage.posts}
                addPost={props.addPost}
                newPostText={props.state.profilePage.newPostText}
                updateNewPostText={props.updateNewPostText}
              />
            }
          />
          <Route exact path="/news" element={<News />} />
          <Route exact path="/music" element={<Music />} />
          <Route exact path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
