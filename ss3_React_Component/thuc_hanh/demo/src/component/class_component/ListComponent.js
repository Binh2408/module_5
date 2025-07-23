import React from "react";
import { getAll } from "../../service/student";
import AddComponent from "./AddComponent";
import DeleteComponent from "./DeleteComponent";
class ListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isAdded: false,
      isDeleted: false,
      student: [],
      showDeleteModal: false,
      selectedStudent: null,
    };
  }

  componentDidMount() {
    this.setState({
      student: getAll(),
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      (prevState.isAdded === false && this.state.isAdded === true) ||
      (prevState.isDeleted === false && this.state.isDeleted === true)
    ) {
      this.handleLoadStudents();
    }
  }

  handleLoadStudents = () => {
    this.setState({
      student: getAll(),
      isAdd: false,
      isDeleted: false,
    });
  };

  handleOpenDeleteModal = (student) => {
    this.setState({
      showDeleteModal: true,
      selectedStudent: student,
    });
  };

  handleCloseDeleteModal = () => {
    this.setState({
      showDeleteModal: false,
      selectedStudent: null,
    });
  };

  render() {
    return (
      <>
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
            {this.state.student &&
              this.state.student.map((student, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>
                    <button onClick={() => this.handleOpenDeleteModal(student)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <AddComponent setAddedFlag={() => this.setState({ isAdded: true })} />
        {this.state.selectedStudent && (
          <DeleteComponent
            show={this.state.showDeleteModal}
            onClose={this.handleCloseDeleteModal}
            onDeleted={() => this.setState({ isDeleted: true })}
            id={this.state.selectedStudent.id}
            name={this.state.selectedStudent.name}
          />
        )}
      </>
    );
  }
}

export default ListComponent;
