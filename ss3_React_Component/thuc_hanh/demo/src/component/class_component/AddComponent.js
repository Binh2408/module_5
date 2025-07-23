import React from "react";
import { add } from "../../service/student";
class AddComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      student: {
        id: 0,
        name: "",
      },
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState((prev) => ({
      student: {
        ...prev.student,
        [name]: name === "id" ? Number(value) : value,
      },
    }));
  };

  handleAdd = () => {
    add(this.state.student);
    this.setState({
      student: {
        id: 0,
        name: "",
      },
    });
    if (this.props.setAddedFlag) {
      this.props.setAddedFlag();
    }
  };

  render() {
    return (
      <>
        <input
          name="id"
          onChange={this.handleChange}
          value={this.state.student.id}
          placeholder="Nhập ID"
        />
        <input
          name="name"
          onChange={this.handleChange}
          value={this.state.student.name}
          placeholder="Nhập tên"
        />
        <button onClick={this.handleAdd}>Save</button>
      </>
    );
  }
}

export default AddComponent;
