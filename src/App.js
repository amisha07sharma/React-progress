import React, { useEffect, useState } from "react";
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
  // function clickHandler() {
  //   const fetchUser = async () => {
  //     await getUser();
  //   };

  //   const value = getUser().then((xyz) => {
  //     console.log(xyz)
  //   })
  //   console.log(value)
  //   setUser(value)
  // }
  
    
  

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const user = await getUser();
  //     setUser(user);
  //   };
  //   fetchUser();
  //   console.log(user)
  // },[])

  return (
    <div>
      {/* {user} ?  {user["name"]} : null */}
      <div>{user ? user : "not set"}</div>
      {/* <button onClick={clickHandler}>Click</button> */}
      <label htmlFor="search">Text :</label>
      <input id="search" type="text" placeholder="text" value={text} onChange={changeHandler} />
    </div>
  );
}


export default App;
