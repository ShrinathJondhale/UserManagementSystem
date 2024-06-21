import "./CSS/Users.css";
import CreateForm from "./Pages/CreateForm";
import UserList from "./Pages/UserList";

function HomePage() {
  return (
    <div className="mainContainer">
      <div className="subContainer">
        <CreateForm />
      </div>
      <div className="subContainer">
        <UserList />
      </div>
    </div>
  );
}

export default HomePage;
