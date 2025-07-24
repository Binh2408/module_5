import { useRef } from "react";
import { add } from "../service/studentService";
import React from "react";
function AddComponent({setIsLoading}) {
    const nameRef = useRef();
    const countryRef = useRef();

    const handleAdd = () => {
        let student = {
            name: nameRef.current.value,
            country: countryRef.current.value
        }
        add(student);
        setIsLoading(pre => !pre);
    }

    return (
        <>
            <input name="name" ref={nameRef} placeholder="Enter Name"/>
            <input name="country" ref={countryRef} placeholder="Enter Country"/>
            <button onClick={handleAdd}>Save</button>
        </>
    )

}

export default React.memo(AddComponent) ;