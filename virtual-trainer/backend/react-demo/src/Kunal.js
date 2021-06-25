import React, {useState} from "react";


function Kunal() {

// const myState = useState("before");
// const data = myState[0];
// const setData = myState[1];

const [data, setData] = useState("before");
const [input, setInput] = useState("");
 
    function handleClick(event) {
        event.preventDefault();
        console.log("button clicked");
        console.log(data, setData);
        setData("after");
        console.log("data changed");
    }
    function handleChange(event) {
        console.log(event.target);
        const {name, value} = event.target;
        event.preventDefault();
        if (name === "a"){

            setInput(value);
        } 

    }
    return(<div>
        
        <h1>Kunal's Component</h1>

        <h2>{data}</h2>

        <p>{input}</p>

        <button type="submit" onClick={handleClick} >Change data</button>

        <input type="text" name="a" onChange={handleChange}/>
        <input type="text" name="b" onChange={handleChange}/>
        <input type="text" name="c" onChange={handleChange}/>
        <input type="text" name="d" onChange={handleChange}/>
        <input type="text" name="e" onChange={handleChange}/>

    </div>)
}

export default Kunal;