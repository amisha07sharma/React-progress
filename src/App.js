import React, { useEffect, useState } from "react";

// eslint-disable-next-line no-unused-expressions
"use strict";
function App() {

  const [text, setText] = useState('')

  function changeHandler(event) {
    setText(event.target.value);
  }

//--------------------------------------------------------------------

  const [user, setUser] = useState(null)

  function getUser() {
    return Promise.resolve({ id: "1", name: "Amisha" })
  }
  
  useEffect(() => {
    async function test () {
      const user = await getUser();
      setUser(user.name);  
    }
    test()
  }, []);
  
  console.log(global)
  return (
    <div>
      <div>{user ? user : "not set"}</div>
      <label htmlFor="search">Text :</label>
      <input id="search" type="text" placeholder="text" value={text} onChange={changeHandler} />
    </div>
  );
}


export default App;
