// state thay đổi sẽ bị render lại
//-> dùng useRef
import { useState } from "react";
import { useEffect } from "react";
import { getAll, search } from "../service/student";
import AddComponent from "./AddComponent";
import DeleteComponent from "./DeleteComponent";
import EditComponent from "./EditComponent";
import SearchComponent from "./SearchComponent";
function ListComponent() {
  const [studentList, setStudentList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [deleteStudent, setDeleteStudent] = useState({ id: 0, name: "" });

  const [isShowEdit, setIsShowEdit] = useState(false);
  const [editStudent, setEditStudent] = useState({ id: 0, name: "" });

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setStudentList([...getAll()]);
    } else {
      setStudentList([...search(searchTerm)]);
    }
  }, [isLoading, isShowModal, isShowEdit, searchTerm]);

  const handleShowModal = (student) => {
    setIsShowModal((pre) => !pre);
    setDeleteStudent(student);
  };

  const handleCloseModal = () => {
    setIsShowModal((pre) => !pre);
  };

  const handleShowEdit = (student) => {
    setEditStudent(student);
    setIsShowEdit(true);
  };

  const handleCloseEdit = () => {
    setIsShowEdit(false);
  };

  return (
    <>
      <AddComponent setIsLoading={setIsLoading} />
      <SearchComponent
        value={searchTerm}
        onChange={setSearchTerm}
        placeholder="Search By Name..."
      />

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
          {studentList.length > 0 ? (
            studentList.map((student, index) => (
              <tr key={student.id}>
                <td>{index + 1}</td>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>
                  <button onClick={() => handleShowModal(student)}>
                    Delete
                  </button>
                </td>
                <td>
                  <button onClick={() => handleShowEdit(student)}>Edit</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: "center", color: "red" }}>
                Không tìm thấy sinh viên nào.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <DeleteComponent
        deleteStudent={deleteStudent}
        isShowModal={isShowModal}
        handleCloseModal={handleCloseModal}
      />
      <EditComponent
        editStudent={editStudent}
        isShowEdit={isShowEdit}
        handleCloseEdit={handleCloseEdit}
      />
    </>
  );
}

export default ListComponent;
