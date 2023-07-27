import { useState } from "react";
import "./AddUser.css";

function AddUser(props) {
  const [username, setUserName] = useState("");
  const [userage, setUserAge] = useState("");

  function usernameHandler(e) {
    setUserName(e.target.value);
  }
  function userageHandler(e) {
    setUserAge(e.target.value);
  }
  function AddUserHandler(e) {
    e.preventDefault()
    if(username.trim().length===0 || userage.trim().length===0){
        return
    }
    if(+userage<1){
        return
    }
    const obj={
        username:username,
        age:userage
    }
    props.addUser(obj)
    setUserName("")
    setUserAge("")
  }
  return (
    <form onSubmit={AddUserHandler}>
      <div className="form-control">
        <label> Enter User Name</label>
        <input onChange={usernameHandler} type="text" value={username} />
        <label> Enter Age</label>
        <input onChange={userageHandler} type="number" value={userage} />
      </div>
      <button className="button" type="submit">
        Add User
      </button>
    </form>
  );
}
export default AddUser;
