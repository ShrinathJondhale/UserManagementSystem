import "bootstrap/dist/css/bootstrap.css";
import { useContext, useEffect, useState } from "react";
import UserContext from "../Context/UserContext";
import { useNavigate, useParams } from "react-router-dom";

function CreateForm({ user }) {
  const [username, setusername] = useState("");
  const [phone, setphone] = useState();
  const [isAdult, setisAdult] = useState(false);
  const navigate = useNavigate();

  const { editUser, handleEdit, addUser, getUserByid } =
    useContext(UserContext);

  let {id}= useParams();

  useEffect(() => {
    if (id) {
      debugger;
      const currentuser = getUserByid(id);
      setusername(currentuser.name);
      setphone(currentuser.phone);
      setisAdult(currentuser.isAdult);
    }
  }, []);

  const handleAdd = (event) => {
    if (id) {
      editUser(user.id, username, phone, isAdult);
      handleEdit();
      navigate("/");
    } else {
      event.preventDefault();

      if (username === "" || phone === "") {
        alert("Please fill all fields");
      } else {
        addUser(username, isAdult, phone);
        setusername("");
        setphone("");
        setisAdult(false);
      }
    }
  };

  return (
    <>
      <div className="form-group" style={{ padding: "5px" }}>
        <label>UserName</label>
        <input
          value={username}
          type="text"
          className="form-control"
          placeholder="Enter username"
          onChange={(e) => {
            setusername(e.target.value);
          }}
        />
      </div>
      <div className="form-group" style={{ padding: "5px" }}>
        <label>PhoneNumber</label>
        <input
          value={phone}
          type="number"
          className="form-control"
          placeholder="Enter phoneNumber"
          onChange={(e) => {
            setphone(e.target.value);
          }}
        />
      </div>
      <div className="form-group form-check" style={{ padding: "5px" }}>
        <input
          checked={isAdult}
          type="checkbox"
          onChange={(e) => {
            setisAdult(e.target.checked);
          }}
          style={{ marginLeft: "10px" }}
        />
        <label className="form-check-label" style={{ padding: "5px" }}>
          I am above 18
        </label>
      </div>
      <button
        className="btn btn-primary"
        onClick={handleAdd}
        style={{ marginLeft: "10px", marginBottom: "10px" }}
      >
        Save
      </button>
    </>
  );
}

export default CreateForm;
