import React, { useEffect, useState } from "react";
import CustomInput from "./Components/CustomInput";
import { getUser } from "./Components/getUser";

// eslint-disable-next-line no-unused-expressions
"use strict";
function App() {

  const [user, setUser] = useState(null)
  
  useEffect(() => {
    async function fetchUser () {
      const user = await getUser();
      setUser(user);  
    }
    fetchUser()
  }, []);
  
  console.log(global)
  return (
    <div>
      <div>{user ? user : null}</div>
      <CustomInput/>
    </div>
  );
}


export default App;
