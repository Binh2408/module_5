let studentList = [
  {
    id: 1,
    name: "Bình",
    country: "Đà Nẵng",
  },
  {
    id: 2,
    name: "Chung",
    country: "Quảng Bình",
  },
  {
    id: 3,
    name: "Duy",
    country: "Huế",
  },
  {
    id: 4,
    name: "Khánh",
    country: "Quảng Bình",
  },
];

export function findAll() {
    return [...studentList];
}

export function add(student) {
    const maxId = studentList.length > 0 ? Math.max(...studentList.map(s => s.id)) : 0;
    const newStudent = { ...student, id: maxId + 1 };
    studentList.push(newStudent);
}

export function deleteById(id) {
    const index = studentList.findIndex((student) => student.id === id);
if (index !== -1) {
  studentList.splice(index, 1);
}
}
