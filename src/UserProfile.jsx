import React from 'react';


function UserProfile(props) {
  return (
    <div className="profile-card">
      <h2>User Profile</h2>
      <img src="https://as2.ftcdn.net/v2/jpg/00/97/58/97/1000_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg" alt="User Photo" className="photo"/>
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
      <a href={`mailto:${props.email}`}>Send Email</a>
    </div>
  );
}

export default UserProfile;
