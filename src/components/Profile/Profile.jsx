import React from 'react'
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'

const Profile = () => {
  return (
    <div>
      <div>
        <img src='https://phonoteka.org/uploads/posts/2021-06/1624306054_56-phonoteka_org-p-oboi-plyazh-krasivo-65.jpg'
          width={1000} height={500}></img>
      </div>
      <div>
        ava + desc
      </div>
      <MyPosts />
    </div>
  );
}

export default Profile;