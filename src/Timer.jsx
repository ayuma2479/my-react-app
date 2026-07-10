import { useEffect,useState,useRef } from 'react';

function Timer() {
    const [count, setCount] = useState(0);
    const intervalRef = useRef(null);

    const handleStop = () => {
        clearInterval(intervalRef.current);
    };

    useEffect(() => {
    intervalRef.current = setInterval(() => {
        setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervalRef.current);
    }, []);

    return (
    <div>
        <h1 color="blue">{count}秒経過</h1>
        <button onClick={handleStop}>ストップ</button>
    </div>
    );
}

export default Timer;