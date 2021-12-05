import { rerenderEntireTree } from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, post: "Hi", likesCount: 12 },
      { id: 2, post: "it is my first post", likesCount: 22 },
    ],
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: "Den" },
      { id: 2, name: "Roma" },
      { id: 3, name: "Kate" },
      { id: 4, name: "Sasha" },
    ],
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "Hello" },
      { id: 3, message: "Sup?" },
      { id: 4, message: "OK" },
    ],
  },
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    post: postMessage,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
};

export default state;
