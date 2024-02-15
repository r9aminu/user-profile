import React from 'react';
import './App.css'; 
import UserProfile from './UserProfile'; 
function App() {
  return (
    <div className="App">
      <UserProfile name="Jane Doe" email="jane.doe@example.com" />
    </div>
  );
}

export default App;
