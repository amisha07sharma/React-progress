import React, { useEffect, useState } from "react";
import { getUser } from "./Components/getUser";

// eslint-disable-next-line no-unused-expressions
"use strict";
function App() {

  const [text, setText] = useState('')

  function changeHandler(event) {
    setText(event.target.value);
  }

//--------------------------------------------------------------------

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
      <label htmlFor="search">Text :</label>
      <input id="search" type="text" placeholder="text" value={text} onChange={changeHandler} />
      <div>You typed : {text}</div>
    </div>
  );
}


export default App;
