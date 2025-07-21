const students = [
  { name: "An", age: 20, scores: [8, 7.5, 9] },
  { name: "Bình", age: 21, scores: [6, 5, 7] },
  { name: "Chi", age: 22, scores: [9.5, 8.5, 10] }
];

//câu 1
const newList = students.map(student => {
    const total = student.scores.reduce((sum, score) => sum+score,0);
    const average = total/student.scores.length;
    return {
        ...student,
        averageScore: average.toFixed(2)
    };
});

console.log(newList);
console.log(`------------------------------------`);

//câu 2
console.log(newList.filter(student => student.averageScore >= 8));
console.log(`------------------------------------`);


//câu 3
students.forEach(({name,scores}) => {
    console.log(name);
    console.log(scores);
    
});
console.log(`------------------------------------`);

//Câu 4
const result = students.map(({name,age,scores})=> {
    const average = (scores.reduce((sum,score) => sum+score,0)/scores.length).toFixed(2);
    return `${name} - Age: ${age} - Avg score: ${average}`;
})

console.log(result.join("\n"));







let array = [10,15,20,30,35];

const total = array.filter(num => num%2 === 0).reduce((sum, current) => sum+current,0);
console.log(total);

