import { useState } from "react";

function Home() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    const increaseCount = () => setCount(count + 1);
    const decreaseCount = () => {
        if (count > 0) setCount(count - 1);
    };
    const updateText = (e) => setText(e.target.value);

    return (
        <div>
            <div>
                <button onClick={decreaseCount} disabled={count < 0}>
                    Decrease
                </button>
                <span>{count}</span>
                <button onClick={increaseCount}>Increase</button>
            </div>
            <div>
                <input onChange={updateText} type="text" placeholder="Just type it..." />
                <span>{text}</span>
            </div>
        </div>
    );
}

export default Home;
