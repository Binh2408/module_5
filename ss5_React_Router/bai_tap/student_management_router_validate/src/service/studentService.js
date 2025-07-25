export let studentList = [
  {
    id: 1,
    name: "Bình GOLD",
    subject: ["Java", "JavaScript", "React"],
    classCG: {
      id: 1,
      name: "C02",
    },
  },
  {
    id: 2,
    name: "Chung Mess",
    subject: ["Java", "JavaScript"],
    classCG: {
      id: 2,
      name: "C03",
    },
  },
];

export function findAll() {
  return [...studentList];
}

export function add(student) {
  const maxId =
    studentList.length > 0 ? Math.max(...studentList.map((s) => s.id)) : 0;
  const newStudent = { ...student, id: maxId + 1 };
  studentList.push(newStudent);
}

export function deleteById(id) {
  studentList = studentList.filter((student) => student.id !== id);
}

export function findById(id) {
  return studentList.find((student) => student.id === +id);
}

export function search(name) {
  return studentList.filter((student) =>
    student.name.toLowerCase().includes(name.toLowerCase())
  );
}

export function updateById(id, updatedStudent) {
  const index = studentList.findIndex((student) => student.id === id);
  if (index !== -1) {
    studentList[index] = { ...studentList[index], ...updatedStudent };
  }
}
