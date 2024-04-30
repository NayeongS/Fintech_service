import React, { useState } from "react";
import Welcome from "./Welcome";


const ListComponent = () => {
  const [users, setUsers] = useState([
    { username: "권유진", age: 19, major: "영문학" },
    { username: "김영경", age: 20, major: "생명과학" },
    { username: "이수진", age: 22, major: "전자공학" },
  ]);
  
  return (
    <div>
      {users.map((user) => {
        return <Welcome userName={user.username} age={user.age}></Welcome>;
      })}
    </div>
  );
};

export default ListComponent;