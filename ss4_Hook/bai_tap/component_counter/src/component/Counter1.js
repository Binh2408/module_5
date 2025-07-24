import useIncrement from "../hook/useIncrement";
function Counter1() {
    const [count,setCount]  = useIncrement(1); 

    return <>
        <h3>Count: {count}</h3>
        <button onClick={setCount}>Add 1</button>
    </>
}

export default Counter1 ;