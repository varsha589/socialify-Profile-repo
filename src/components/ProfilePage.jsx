import React, { useState, useEffect } from 'react';
import './Profile.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Photos from "./Photos.jsx"

const ProfilePage = ({
  name,
  about,
  email,
  posts,
  friends,
  isFollowing,
  isCurrentUser,
  isStory,
  onEditProfileClick,
}) => {

  const [buttonText, setButtonText] = useState(isCurrentUser ? '' : (isFollowing ? '' : 'Add Friend'));
  // Handle potential missing `isFollowing` prop (default to false)
  useEffect(() => {
    if (isFollowing === undefined) {
      setButtonText('Add Friend');
    }
  }, []);

  const handleClick = () => {
    setButtonText(buttonText === 'Add Friend' ? 'Friends' : 'Add Friend');
  };

  return (
    <div className="header__wrapper">
      <header></header>
      <div className="cols__container">
        <div className="left__col">
          <div className="img__container">
            <img src="images/user.jpeg" alt={name} />
            {isStory && <span></span>}
            {isCurrentUser && (
              <button
                className="edit-profile-button"
                onClick={onEditProfileClick} // Handle edit profile click
              >
                <i className="fas fa-pencil"></i> {/* Using Font Awesome for icon */}
              </button>
            )}
          </div>
          <h2>{name}</h2>
          <p>{about}</p>
          <p>{email}</p>

          {buttonText && (
            <div className="follow__button">
              <button className="button" onClick={handleClick}>
                {buttonText}
              </button>
            </div>
          )}

          <ul className="about">
            <li>
              <span>{posts}</span>Posts
            </li>
            <li>
              <span>{friends}</span>Friends
            </li>
          </ul>
        </div>
        <div className="right__col">
          <nav>
            <ul>
              <li>
                <a href="">photos</a>
              </li>
              <li>
                <a href="">activities</a>
              </li>
              <li>
                <a href="">friends</a>
              </li>
            </ul>
          </nav>
          <Photos/>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
