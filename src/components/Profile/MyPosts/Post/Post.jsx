import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://koshka.top/uploads/posts/2021-11/1637891761_3-koshka-top-p-serii-kot-multyashnii-8.jpg'></img>
      {props.message}
      <div>
        <span>like {props.likeCount}</span>
      </div>
    </div>
  );
}

export default Post;

