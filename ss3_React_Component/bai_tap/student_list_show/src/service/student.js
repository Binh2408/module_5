export const studentList = [
    {
        id:1,
        name:"Bình",
        age: 20,
        address: "Đà Nẵng"
    },
    {
        id:2,
        name: "Chung",
        age: 30,
        address: "Quảng bình"
    }
];

export function getAll() {
    return [...studentList];
}