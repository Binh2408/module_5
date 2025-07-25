import { useEffect, useState } from "react";
import { findAll, search } from "../service/studentService";
import { Link } from "react-router-dom";
import DeleteComponent from "./DeleteComponent";
import SearchComponent from "./SearchComponent";
import { Container, Table, Button } from "react-bootstrap";

function ListComponent() {
  const [studentList, setStudentList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [deleteStudent, setDeleteStudent] = useState({
    id: 0,
    name: "",
    subject: "",
    classCG: {
      id: "",
      name: "",
    },
  });
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setStudentList([...findAll()]);
    } else {
      setStudentList([...search(searchTerm)]);
    }
  }, [isLoading, isShowModal, searchTerm]);

  const handleShowDeleteModal = (student) => {
    setIsShowModal((prev) => !prev);
    setDeleteStudent(student);
  };

  const handleCloseDeleteModal = () => {
    setIsShowModal((prev) => !prev);
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-3">Student List</h2>
      <SearchComponent
        value={searchTerm}
        onChange={setSearchTerm}
        placeholder="Search by name..."
      />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Name</th>
            <th>Subjects</th>
            <th>Class</th>
            <th>Detail</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {studentList.length > 0 ? (
            studentList.map((student, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.subject.join(", ")}</td>
                <td>{student.classCG?.name}</td>
                <td>
                  <Button
                    variant="info"
                    size="sm"
                    as={Link}
                    to={`/detail/${student.id}`}
                  >
                    Detail
                  </Button>
                </td>

                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleShowDeleteModal(student)}
                  >
                    Delete
                  </Button>
                </td>
                <td>
                  <Button
                    variant="info"
                    size="sm"
                    as={Link}
                    to={`/edit/${student.id}`}
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center text-danger">
                Không tìm thấy sinh viên nào.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      <DeleteComponent
        isShowModal={isShowModal}
        deleteStudent={deleteStudent}
        handleCloseDeleteModal={handleCloseDeleteModal}
      />
    </Container>
  );
}
export default ListComponent;
