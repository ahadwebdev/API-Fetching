import React, { useEffect, useState } from "react";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => setUser(user));
  });

  return (
    <React.Fragment>
      <div>
        {user &&
          user.map((myuser) => (
            <div key={myuser.id}>
              <h1>{myuser.name}</h1>
              <h1>{myuser.username}</h1>
              <h1>{myuser.email}</h1>
              <h1>{myuser.address.geo.lat}</h1>
            </div>
          ))}
      </div>
    </React.Fragment>
  );
};

export default App;
