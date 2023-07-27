import { useState } from "react";
import "./App.css";
import AddUser from "./components/AddUsers/AddUser";
import ShowUser from "./components/ShowUser/ShowUser";
function App() {
  var [users, setUser] = useState([
    {
      username: "Max",
      age: 31,
    },
    {
      username: "Rax",
      age: 29,
    },
  ]);

  function addUserHandler(newUser) {
    setUser((prevUser) => {
      return [newUser, ...prevUser];
    });
  }
  return (
    <div>
      <section id="goal-form">
        <AddUser addUser={addUserHandler}></AddUser>
      </section>
      <section id="goals">
        <ShowUser users={users}></ShowUser>
      </section>
    </div>
  );
}

export default App;
