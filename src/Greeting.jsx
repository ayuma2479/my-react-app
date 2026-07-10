import { useState } from "react";

//Greeting.jsx
const Greeting = () => {
    const [name,setName] = useState('');

    const handleClick = () => {
        alert(`Hello, "${name}" !`);
    };

  return (
    <div>
        <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="名前を入力" />
    
    <button onClick={handleClick}>送信</button>
    </div>
  );
};

export default Greeting;
