import { renderEntireTree } from "../render";

let state = {
  profilePage:{
    posts: [
      { id: 1, message: 'Hi, how are you?', likesCount: 16 },
      { id: 2, message: 'It\'s my first post', likesCount: 21 },
      { id: 3, message: 'It\'s my first', likesCount: 26 },
      { id: 4, message: 'It\'s my first', likesCount: 31 },
    ]
  },
  dialogsPage:{
    dialogs: [
      { id: 1, name: 'Dimych' },
      { id: 2, name: 'Andrey' },
      { id: 3, name: 'Sveta' },
      { id: 4, name: 'Sasha' },
      { id: 5, name: 'Victor' },
      { id: 6, name: 'Valera' },
    ],
    messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Yo' },
    { id: 3, message: 'Hi, how r u?' },
    { id: 4, message: 'Hi' },
    { id: 5, message: 'Yo' },
    { id: 6, message: 'Hi, how r u?' }
  ]
  }
}

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0
  };

  state.profilePage.posts.push(newPost);
  renderEntireTree(state);
}

export default state;