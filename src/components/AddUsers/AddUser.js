import { useState } from "react";
import "./AddUser.css";
import ErrorModel from "../ErrorModel/ErrorModel";

function AddUser(props) {
  const [username, setUserName] = useState("");
  const [userage, setUserAge] = useState("");
  const [error,setError]=useState()
  function usernameHandler(e) {
    setUserName(e.target.value);
  }
  function userageHandler(e) {
    setUserAge(e.target.value);
  }
  function AddUserHandler(e) {
    e.preventDefault();
    if (username.trim().length === 0 || userage.trim().length === 0) {
      setError({
        title:"Invalid Input",
        message:"Please enter name and age"
      })
      return;
    }
    if (+userage < 1) {
      setError({
        title:"Invalid age",
        message:"Age cannot be negative"
      })
      return;
    }
    const obj = {
      username: username,
      age: userage,
    };
    props.addUser(obj);
    setUserName("");
    setUserAge("");
  }
  function DismisBoxHandler(){
    setError(null)
  }
  return (
    <div>
      {error && <ErrorModel title={error.title} message={error.message} onDismisBox={DismisBoxHandler} ></ErrorModel>}
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
    </div>
  );
}
export default AddUser;
