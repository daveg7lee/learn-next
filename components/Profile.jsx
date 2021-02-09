import css from "styled-jsx/css";
import { GoMail, GoOrganization, GoLink, GoLocation } from "react-icons/go";

const style = css`
  h2 {
    margin-left: 20px;
  }
  .user-bio {
    margin-left: 20px;
    margin-top: 12px;
    font-style: italic;
  }
  .profile-box {
    width: 25%;
    max-width: 272px;
    margin-right: 26px;
  }
  .profile-image-wrapper {
    width: 100%;
  }
  .profile-image-wrapper,
  .profile-image {
    display: block;
    width: 100%;
  }
  .profile-image {
    border-radius: 10%;
  }
  .profile-username {
    margin: 0;
    padding-top: 16px;
    font-size: 26px;
  }
  .profile-user-login {
    margin: 0;
    font-size: 20px;
  }
  .profile-user-bio {
    margin: 0;
    padding-top: 16px;
    font-size: 14px;
  }
  .profile-user-info {
    display: flex;
    align-items: center;
    margin: 4px 0 0;
  }
  .profile-user-info-text {
    margin: 0;
    margin-left: 6px;
  }
  a {
    color: #0366d6;;
    text-decoration: none;
  }
`;

const Profile = ({ user }) => (
  <>
    <div className="profile-box">
      <div className="profile-image-wrapper">
        <img src={user.avatar_url} alt={`${user.name} 프로필 이미지`} className="profile-image"/>
      </div>
      <h2 className="profile-username">{user.name}</h2>
      <p className="profile-user-login">{user.login}</p>
      <p className="profile-user-bio">{user.bio}</p>
      <div className="profile-user-info">
        <GoLocation size={16} color="#6a737d"/>
        <p className="profile-user-info-text">{user.location}</p>
      </div>
      <div className="profile-user-info">
        <GoLink size={16} color="#6a737d"/>
        <p className="profile-user-info-text"><a href={user.blog}>{user.blog ? user.blog : "No Blog"}</a></p>
      </div>
      <div className="profile-user-info">
        <GoOrganization size={16} color="#6a737d"/>
        <p className="profile-user-info-text">{user.company ? user.company : "No Company"}</p>
      </div>
    </div>
    <style jsx>{style}</style>
  </>
);

export default Profile;