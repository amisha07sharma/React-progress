import React,{useState} from "react";
function App() {

  const [text, setText] = useState('')

  function changeHandler(event){
    setText(event.target.value);
  }
  return (
    <div>
      <label htmlFor="search">Text :</label>
      <input id="search" type="text" placeholder="text" value={text} onChange={changeHandler} />
    </div>
  );
}


export default App;
