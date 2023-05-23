import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
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
          <Post message='Hi, how are you?' likeCount='15'/>
          <Post message="It's my first post" likeCount='20'/>
          <Post message="It's my first post11111111111" likeCount='25'/>
          <Post message="It's my first 222222" likeCount='30'/>
          <Post />
          <Post />
          <Post />
        </div>
      </div>
  );
}

export default MyPosts;