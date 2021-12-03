import "./AllUsers.css";
import service from "../../services";
import { useState, useEffect } from "react";

export default function AllUsers() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    service.displayAllUsers().then((response) => {
      setUserList(response.data);
    });
  }, []);

  return (
    <div>
      {userList.map((users, id) => (
        <div id={id} >
            <p className="p">Nom:{users.lastName } Prénom:{users.firstName} Email:{users.email}</p>
        </div>
      ))}
    </div>
  );
}
