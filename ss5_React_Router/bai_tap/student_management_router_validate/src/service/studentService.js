import axios from "axios";

export async function findAll() {
  try {
    const response = await axios.get("http://localhost:8080/students");
    console.log(response);
    return response.data;
  } catch (error) {
    console.log("Error: " + error);
    return [];
  }
}

export async function add(student) {
  try {
    const response = await axios.post(
      "http://localhost:8080/students",
      student
    );
    // return response.data;
  } catch (error) {
    console.log("Error" + error);
  }
}

export async function findById(id) {
  try {
    const response = await axios.get("http://localhost:8080/students/" + id);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log("Error" + error);
    return null;
  }
}

export async function deleteById(id) {
  try {
    const response = await axios.delete("http://localhost:8080/students/"+id);
  } catch (error) {
    console.log("Error" + error);
  }
}

export async function updateById(id, student) {
  try {
    const response = await axios.put("http://localhost:8080/students/"+id,student);
    return response.data;
  } catch (error) {
    console.log("Error" + error);
    
  }
}

// export async function search(name) {
  // try {
    // const response = await axios.get(`http://localhost:8080/students?name_like=${name}`);
    // return response.data;
  // } catch (error) {
    // console.log("Error" + error);
    // return [];
  // }
// }

export async function search(searchName,searchClass) {
  try {
    const response = await axios.get(`http://localhost:8080/students`);
    const students = response.data;
    
    const filtered = students.filter((student)=> {
      const nameKey = student.name.toLowerCase().includes(searchName.toLowerCase());
      const classKey = student.classCG.name.toLowerCase().includes(searchClass.toLowerCase());
      return nameKey&&classKey;
    });
return filtered;

  } catch (error) {
    console.log("Error" + error);
    return [];
  }
}
// export let studentList = [
  // {
    // id: 1,
    // name: "Bình GOLD",
    // subject: ["Java", "JavaScript", "React"],
    // classCG: {
      // id: 1,
      // name: "C02",
    // },
  // },
  // {
    // id: 2,
    // name: "Chung Mess",
    // subject: ["Java", "JavaScript"],
    // classCG: {
      // id: 2,
      // name: "C03",
    // },
  // },
// ];

// export function findAll() {
//   return [...studentList];
// }

// export function add(student) {
// const maxId =
// studentList.length > 0 ? Math.max(...studentList.map((s) => s.id)) : 0;
// const newStudent = { ...student, id: maxId + 1 };
// studentList.push(newStudent);
// }
//
// export function deleteById(id) {
  // studentList = studentList.filter((student) => student.id !== id);
// }
//
// export function findById(id) {
// return studentList.find((student) => student.id === +id);
// }
//
// export function search(name) {
  // return studentList.filter((student) =>
    // student.name.toLowerCase().includes(name.toLowerCase())
  // );
// }
//
// export function updateById(id, updatedStudent) {
  // const index = studentList.findIndex((student) => student.id === id);
  // if (index !== -1) {
    // studentList[index] = { ...studentList[index], ...updatedStudent };
  // }
// }
// 