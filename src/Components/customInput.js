import React, {useState} from "react";

function CustomInput() {
    const [text, setText] = useState('')
    return <div>
        <label htmlFor="search">Text :</label>
        <input id="search" type="text" placeholder="text" value={text} onChange={(event) => setText(event.target.value)} />
        <div>You typed : {text}</div>
    </div>;
}

export default CustomInput;