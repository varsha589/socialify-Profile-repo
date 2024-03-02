import './Friend.css'

import React from 'react';

const Friend = ({ name, image, onRemove, about }) => (
  <div className="friend">
    <img src={image} alt={name} className="friend-avatar" />
    <div className="friend-info">
      <p className="friend-name">{name}</p>
      {about && <p className="friend-about">{about}</p>}
      <button className="friend-remove" onClick={() => onRemove(name)}>Remove</button>
    </div>
  </div>
);

const Friends = ({ friends, onRemoveFriend }) => (
  <div className="friends-list">
    <h2 className="friends-list-title">Friends</h2>
    <hr />
    <ul className="friends-list-ul">
      {friends.map((friend) => (
        <li key={friend.id}>
          <Friend
            name={friend.name}
            image={friend.image}
            onRemove={() => onRemoveFriend(friend.id)}
            about={friend.about} 
          />
        </li>
      ))}
    </ul>
  </div>
);

export default Friends;
