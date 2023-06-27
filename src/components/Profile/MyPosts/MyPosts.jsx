import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

  // let posts = [
  //   { id: 1, message: 'Hi, how are you?', likesCount: 15 },
  //   { id: 1, message: 'It\'s my first post', likesCount: 20 },
  //   { id: 1, message: 'It\'s my first post1131111111', likesCount: 25 },
  //   { id: 1, message: 'It\'s my first 2223322', likesCount: 30 },
  // ]

  let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likesCount} />)

  return (
    <div className={s.postsBlock}>
      <h3> My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
        <button>Post remove</button>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;