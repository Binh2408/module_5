import useIncrement from "../hook/useIncrement";

function Counter2() {
    const [count, setCount] = useIncrement(2);
    return <>
        <h3>Count: {count}</h3>
        <button onClick={setCount}>Add 2</button>
    </>
}

export default Counter2 ;