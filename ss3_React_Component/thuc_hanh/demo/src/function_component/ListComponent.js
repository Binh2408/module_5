// state thay đổi sẽ bị render lại 
//-> dùng useRef
import { useState } from "react";
import { useEffect } from "react";
import { getAll } from "../service/student";
import AddComponent from "./AddComponent";
import DeleteComponent from "./DeleteComponent";
function ListComponent () {
    const [studentList, setStudentList]  = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isShowModal, setIsShowModal] = useState(false);
    const [deleteStudent, setDeleteStudent] = useState({id:0, name: ""});
    useEffect(() => {
        setStudentList([...getAll()])
    },[isLoading,isShowModal])

    const handleShowModal = (student) => {
      setIsShowModal(pre => !pre);
      setDeleteStudent(student);
    }

    const handleCloseModal = () => {
      setIsShowModal(pre => !pre);
    }

    return <>
    <AddComponent setIsLoading={setIsLoading} />

    <table border="1" cellPadding="5">
          <thead>
            <tr>
              <th>STT</th>
              <th>ID</th>
              <th>Name</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {studentList &&
              studentList.map((student, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>
                    <button onClick={() => handleShowModal(student)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <DeleteComponent deleteStudent={deleteStudent} isShowModal = {isShowModal} handleCloseModal = {handleCloseModal}/>
    </>
}

export default ListComponent;