import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://phonoteka.org/uploads/posts/2021-06/1624306054_56-phonoteka_org-p-oboi-plyazh-krasivo-65.jpg'
          width={1000} height={500}></img>
      </div>
      <div className={s.descriptionBlock}>
        ava + desc
      </div>
    </div>
  );
}

export default ProfileInfo;