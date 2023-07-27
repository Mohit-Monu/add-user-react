import "./ShowUser.css";
function ShowUser(props) {
  const out = props.users.map((items,index) => (
    <div key={index} >
      <ul className="goal-list">
        <li className="goal-item">
          {items.username} ({items.age} years old ) from {items.college} College
        </li>
      </ul>
    </div>
  ));

  return <div className="big-div">{out}</div>;
}
export default ShowUser;
