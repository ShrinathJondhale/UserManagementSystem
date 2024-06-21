import { useContext } from "react";
import CreateForm from "./CreateForm";
import UserContext from "../Context/UserContext";
import '../CSS/Users.css'
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";

function EditForm() {
    
  const {currentuser}=useContext(UserContext)
  const navigate=useNavigate()
  const {handleEdit}=useContext(UserContext)

 const handleBack=()=>{
  handleEdit();
  navigate('/')
 }


  return (
     <div className="subContainer">
       <CreateForm user={currentuser}/>
       <button className="btn btn-warning" onClick={handleBack} style={{marginRight:'10px',marginBottom:'10px',float:'right'}}>Back</button>
     </div>
    );
  }
  
  export default EditForm;