import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import showUsers from "../../redux/actions/showUsers";

export const ShowUsers = (props) => {
  const dispatch = useDispatch()
  const {usersShow} = useSelector((state) => {
    return {
      usersShow: state.usersShow,
    }})
  const [users, setUsers] = useState([]);
  
  const getUsers = () => {
     dispatch(showUsers())
  }
  useEffect(() => {
    getUsers()
    setUsers(usersShow);
    console.log(users.length);
    console.log(usersShow);
  }, []);

  const handleButton = () => {
    dispatch(showUsers());
    setUsers(usersShow);
    console.log(users);
    console.log(usersShow);
  };

  if (users.length === 0) return ( <h2>loading</h2>) 
  
  return (
    <div>
      <button onClick={handleButton}>aaa</button>
      { 
        users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })
       }
    </div>
  );
};


