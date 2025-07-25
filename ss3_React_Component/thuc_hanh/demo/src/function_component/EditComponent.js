import { useEffect, useState } from "react";
import { updateById } from "../service/student";

function EditComponent({ editStudent, isShowEdit, handleCloseEdit }) {
    const [name,setName] = useState("");
    useEffect(() => {
        setName(editStudent.name);
    },[editStudent]);

    const handleUpdate = () => {
        updateById(editStudent.id,{name});
        handleCloseEdit();
    }

    if (!isShowEdit) return null;
    return (
    <div style={{ border: "1px solid black", padding: "10px", marginTop: "10px" }}>
      <h4>Edit information student{editStudent.name}</h4>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="New name"
      />
      <button onClick={handleUpdate}>Save</button>
      <button onClick={handleCloseEdit}>Close</button>
    </div>
  );
}

export default EditComponent ;