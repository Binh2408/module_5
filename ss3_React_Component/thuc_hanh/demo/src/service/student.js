export const students = [
  {
    id: 1,
    name: "Bình Gold",
  },
  {
    id: 2,
    name: "Chung Mess",
  },
  {
    id: 3,
    name: "Khánh Béo",
  },
  {
    id: 4,
    name: "Duy Béo",
  },
];

export function getAll() {
  return [...students];
}

export function add(student) {
  students.push(student);
}

export function deleteById(id) {
  const index = students.findIndex((student) => student.id === id);
  if (index !== -1) {
    students.splice(index, 1);
  }
}

export function updateById(id, updatedStudent) {
  const index = students.findIndex((student) => student.id === id);
  if (index !== -1) {
    students[index] = { ...students[index], ...updatedStudent };
  }
}

export function search(name) {
  return students.filter((student) =>
      student.name.toLowerCase().includes(name.toLowerCase())
    );
}