import React from 'react';
import ProfilePage from './components/ProfilePage'; 
import '@fortawesome/fontawesome-free/css/all.min.css';


const App = () => {
  return (
    <div>
      {
      <ProfilePage
        name="Anna Smith"
        about="UX/UI Designer"
        email="anna@example.com"
        posts={4073}
        friends={322}
        isFollowing={false}
        isCurrentUser={false}
        isStory={true}
      />
      }
      
      
    </div>
  );
}

export default App;



/*import React from 'react';
import Friends from './components/Friends';

const friendsData = [
  // Replace with your actual friend data, including name, image, and ID
  { id: 1, name: 'John Doe', image: "images/img_1.avif" , isStory:true},
  { id: 2, name: 'Jane Smith', image: "images/img_1.avif" },
  { id: 3, name: 'Michael Brown', image: "images/img_2.avif"},
  { id: 4, name: 'Michael Brown', image: "images/img_3.avif"},
  { id: 5, name: 'Michael Brown', image: "images/img_3.avif"},
  { id: 6, name: 'Michael Brown', image: "images/img_1.avif"},
  { id: 7, name: 'Michael Brown', image: "images/img_1.avif"},
  { id: 8, name: 'Michael Brown', image: "images/img_1.avif"},
  // ... add more friends
];

const App = () => {
  // Pass the friends data as a prop to the Friends component
  return (
    <div className="App">
      <Friends friends={friendsData} />
    </div>
  );
};

export default App;*/




