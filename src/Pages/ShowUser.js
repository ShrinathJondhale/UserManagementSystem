import 'bootstrap/dist/css/bootstrap.css'
import '../CSS/Users.css'
import { useContext } from 'react';
import UserContext from '../Context/UserContext';
import { useNavigate } from 'react-router-dom';
import Button from '../Components/Button';

function ShowUser({user,id}) {
  const navigate=useNavigate()
const {deleteUser,handleEdit}=useContext(UserContext)

const handleEditClick=()=>{
  navigate(`/edit/${user.id}`)
  handleEdit(user)
}


    return (
        <tr>
        <td scope="col">{user.id}</td>
        <td scope="col">{user.name}</td>
        <td scope="col">{user.isAdult?'Yes':'No'}</td>
        <td scope="col">{user.phone}</td>
        <td scope="col"><div className='actionbuttons'>
          {/*<button className='btn btn-warning' onClick={handleEditClick}>Edit</button>*/}
          <Button warning onClick={handleEditClick} children={'Edit'}/>
            <button className='btn btn-danger' onClick={()=>{deleteUser(user.name)}}>Delete</button>
            </div></td>
      </tr>
    );
  }
  
  export default ShowUser;