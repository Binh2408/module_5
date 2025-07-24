import { useEffect, useState } from "react";
import { findAll } from "../service/studentService";
import AddComponent from "./AddComponent";
import DeleteComponent from "./DeleteComponent";
import Table from "react-bootstrap/table"
function ListComponent() {
  const [studentList, setStudentList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [deleteStudent, setDeleteStudent] = useState({
    id: 0,
    name: "",
    country: "",
  });
  useEffect(() => {
    setStudentList([...findAll()]);
  }, [isLoading,isShowModal]);

  const handleShowModal = (student) => {
    setIsShowModal(pre => !pre);
    setDeleteStudent(student);
  };

  const handleCloseModal = () => {
    setIsShowModal((pre) => !pre);
  };
  return (
    <>
      <AddComponent setIsLoading={setIsLoading} />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>ID</th>
            <th>Name</th>
            <th>Country</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {studentList &&
            studentList.map((student, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.country}</td>
                <td>
                  <button onClick={() => handleShowModal(student)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <DeleteComponent
        deleteStudent={deleteStudent}
        isShowModal={isShowModal}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
}

export default ListComponent;
