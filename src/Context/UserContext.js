import { createContext, useState } from "react";

const UserContext = createContext();

function Provider({ children }) {
  const [users, setusers] = useState([]);
  const [isEdit, setisEdit] = useState(false);
  const [currentuser,setcurrentuser]=useState({})

  const handleEdit = function (user) {
    setisEdit(!isEdit);
    setcurrentuser(user);
  };

  const editUser = (id, username, myphone, isAdult) => {
    const newUsers = users.map((user) => {
      if (user.id === id) {
        console.log(user);
        return { ...user, name: username, isAdult: isAdult, phone: myphone };
      }
      return user;
    });
    setusers(newUsers);
  };

  const addUser = (name, isAdult, phone) => {
    setusers([
      ...users,
      {
        id: Math.floor(Math.random() * 999),
        name: name,
        isAdult: isAdult,
        phone: phone,
      },
    ]);
  };

  const deleteUser = (name) => {
    const newusers = users.filter((user) => {
      return user.name !== name;
    });
    setusers(newusers);
  };

  const getUserByid = (id) => {
    users.map((user) => {
      if (user.id === id) {
        setcurrentuser=user;
      }
    });
    return currentuser;
  };

  const valueToshare = {
    isEdit,
    currentuser,
    users,
    addUser,
    deleteUser,
    handleEdit,
    editUser,
    getUserByid
  };

  return (
    <UserContext.Provider value={valueToshare}>{children}</UserContext.Provider>
  );
}

export { Provider };

export default UserContext;
