import "./ErrorModel.css";
import "../AddUsers/AddUser.css";

function ErrorModel(props) {
  return (
    <div className="backdrop">
      <div className="backdrop" onClick={props.onDismisBox} />
      <div className="modal">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p>{props.message}</p>
          <footer className="actions">
            <button className="button" onClick={props.onDismisBox}>
              Okay
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}
export default ErrorModel;
