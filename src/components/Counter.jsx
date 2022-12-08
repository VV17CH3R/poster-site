import React, {useState} from "react";

const Counter = () => {
    const [likes, setLikes] = useState(101)
    const [value, setValue] = useState('')

    function increment() {
      setLikes(likes +1)
    }

    function decrement() {
      setLikes(likes -1)
    }

    return (
      <div className="App">
       <h1>Bacalavrs now: {likes}</h1>
       <button onClick={increment}> Increment </button>
       <button onClick={decrement}> Decrement </button>    </div>
    );
};

export default Counter;