import { useRef, useState } from "react";
import "./AddUser.css";
import ErrorModel from "../ErrorModel/ErrorModel";
import Wrapper from "../Helpers/Wrapper";

function AddUser(props) {
  // const [username, setUserName] = useState("");
  // const [userage, setUserAge] = useState("");

  const nameInput = useRef();
  const ageInput = useRef();
  const collegeInput=useRef()

  const [error, setError] = useState();
  // function usernameHandler(e) {
  //   setUserName(e.target.value);
  // }
  // function userageHandler(e) {
  //   setUserAge(e.target.value);
  // }
  function AddUserHandler(e) {
    e.preventDefault();
    const enteredName = nameInput.current.value;
    const enteredage = ageInput.current.value;
    const enteredcollege = collegeInput.current.value;


    // if (username.trim().length === 0 || userage.trim().length === 0) {
    //   setError({
    //     title: "Invalid Input",
    //     message: "Please enter name and age",
    //   });
    //   return;
    // }
    // if (+userage < 1) {
    //   setError({
    //     title: "Invalid age",
    //     message: "Age cannot be negative",
    //   });
    //   return;
    // }
    // const obj = {
    //   username: username,
    //   age: userage,
    // };
    // props.addUser(obj);
    // setUserName("");
    // setUserAge("");

    if (enteredName.trim().length === 0 || enteredage.trim().length === 0 || enteredcollege.trim().length ===0) {
      setError({
        title: "Invalid Input",
        message: "Please enter name, age and college",
      });
      return;
    }
    if (+enteredage < 1) {
      setError({
        title: "Invalid age",
        message: "Age cannot be negative",
      });
      return;
    }
    const obj = {
      username: enteredName,
      age: enteredage,
      college:enteredcollege
    };
    console.log(obj)
    props.addUser(obj);
    nameInput.current.value = "";
    ageInput.current.value = "";
    collegeInput.current.value = "";

  }
  function DismisBoxHandler() {
    setError(null);
  }
  return (
    <Wrapper>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onDismisBox={DismisBoxHandler}
        ></ErrorModel>
      )}
      <form onSubmit={AddUserHandler}>
        <div className="form-control">
          <label> Enter User Name</label>
          <input
            // onChange={usernameHandler}
            type="text"
            // value={username}
            ref={nameInput}
          />
          <label> Enter Age</label>
          <input
            // onChange={userageHandler}
            type="number"
            // value={userage}
            ref={ageInput}
          />
          <label> Enter College Name</label>
          <input
            // onChange={usernameHandler}
            type="text"
            // value={username}
            ref={collegeInput}
          />
        </div>
        <button className="button" type="submit">
          Add User
        </button>
      </form>
    </Wrapper>
  );
}
export default AddUser;
