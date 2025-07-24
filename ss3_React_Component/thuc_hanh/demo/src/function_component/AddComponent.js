import { useRef } from "react";
import { add, getAll } from "../service/student";
import React from "react";
function AddComponent({setIsLoading}) {
    const idRef = useRef();
    const nameRef = useRef();
    
    const handleAdd = () => {
        let student = {
            id: idRef.current.value,
            name: nameRef.current.value
        }
        add(student);
        console.log(getAll());
        setIsLoading(pre => !pre);
    }
    
  return (
    <>
      <input
        name="id"
        ref={idRef}
        placeholder="Nhập ID"
      />
      <input
        name="name"
        ref={nameRef}
        placeholder="Nhập tên"
      />
      <button onClick={handleAdd}>Save</button>
    </>
  );
}

export default React.memo(AddComponent);
