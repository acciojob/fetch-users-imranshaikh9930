
import React, { useState,useEffect } from "react";
import './../styles/App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   fetchUser();
  // }, []);

  // async function fetchUser() {
  //   try {
  //     const resp = await fetch("https://reqres.in/api/users");
  //     const data = await resp.json();

  //     // Assuming the user data is stored in the "data" property of the response
  //     setUsers(data.data);
  //   } catch (error) {
  //     console.error('Error fetching user data:', error);
  //   }
  // }
  function fetchUser() {
    fetch("https://reqres.in/api/users")
      .then((resp) => resp.json())
      .then((data) => {
        if (data.data && data.data.length > 0) {
          setUsers(data.data);
        } else {
          setUsers([]);
          console.error("No data found to display.");
        }
      })
      .catch((err) => console.error(err));
  }
  

  
 
  return (
    <div className="App">
      <button className="btn" onClick={fetchUser}>Get User List</button>
    <h1>People Details</h1>
    <table>
      <thead>
        <tr>
        
          <th>FirstName</th>
          <th>LastName</th>
          <th>Email</th>
          <th>Avatar</th>
         
        </tr>
      </thead>
      <tbody>
        { users ? users.map((person) => (
          <tr key={person.id}>
          
            <td>{person.first_name}</td>
            <td>{person.last_name}</td>
            <td>{person.email}</td>
            <td> <img src={person.avatar} alt="" /> </td>
           
          </tr>
        )):"No data found to display."} 
      </tbody>
    </table>
  </div>
  )
}

export default App
