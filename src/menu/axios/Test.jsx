import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import useAsync from "./userAsync";

async function getUsers() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
}

function Test() {
  const [state, refetch] = useAsync(getUsers, [], true);
  // const [users, setusers] = useState(null);
  // const [loading, setloading] = useState(false);
  // const [error, seterror] = useState(null);

  const { loading, error, users } = state;
  if (loading) {
    return <div>로딩 중...</div>;
  }
  if (error) {
    return <div>에러가 발생하였습니다.</div>;
  }
  if (!users) {
    return <button onClick={refetch}>데이터 불러오기</button>;
  }
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={refetch}>데이터 다시 요청</button>
    </div>
  );
}

export default Test;
