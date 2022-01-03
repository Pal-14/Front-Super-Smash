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
    <div className="color">
      {userList.map((users, id) => (
        <div id={id}>
          <p className="p">Nom:{users.lastName}</p>
          <p className="p"> Prénom:{users.firstName}</p>
          <p className="p"> Email:{users.email}</p>
          <p className="p"> Id:{users._id}</p>
          <br /> <br />
        </div>
      ))}
    </div>
  );
}
