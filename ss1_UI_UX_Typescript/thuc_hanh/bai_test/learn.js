//ES6
//enhanced object property
//property shorthand
//nếu tên trùng với thuộc tính có thể bỏ
//method property
// function person(name, age) {
//     const salary = "Salary";
//   return {
//     name,
//     age,
//     getName() {
//       return this.name + " " + this.age;
//     },
//     [`${salary}ofDavid`]: 20000,
//   };
// }
// const p = person("Bình",22);
// console.log(p);
// console.log(p.getName());
// console.log(p["SalaryofDavid"]);
// ----------------------------------------------------


// Extened Parameter Handling
//Default Parameter
//Rest Parameter là 1 array chứa các giá trị ngoài giá trị mình đã khai báo
// function getName(name = "Binh", age = 30, ...rest) {
//   console.log(name+ " " + age);
//   console.log('rest', rest);
  
// }

// getName("Chung",23,"IT",200000);
//Spread Parameter
// const todoList = ['Di hoc','Di da bong'];
// const todoListMore = ['lam bai tap','di sieu thi',...todoList];
// console.log("todoListMore", todoListMore);

// ----------------------------------------------------
//ARROW FUNCTION
//Destructuring assignment
//có thể kết hợp Default Value
// const todoList = ['Di hoc','Di da bong','Di xem phim'];
// const [first, , third] = todoList;
// console.log(first, third);
// //Có thể dùng trong function
// const getFullName = ({name}) => {
//   console.log(`Toi ten la ${name}`);
  
// }
// getFullName({name:"Binh"});


// ----------------------------------------------------
//Class
// class Person {
//   constructor(name,age) {
//     this.name = name;
//     this.age = age;
//   }

//   getJob() {
//     console.log(`Cong viec cua toi la ${this.job}`);
    
//   }
// }


// class Worker extends Person {
//   constructor(name,age,job) {
//     super(name,age);
//     this.job = job;
//   }
// }

// const worker = new Worker("binh",23,"IT");
// console.log(worker);
// worker.getJob();

// ----------------------------------------------------
//Promise xử lý các asynchronous là những tác vụ mà ta sẽ ko nhận được ngay thời điểm 
// gọi mà kết quả trả về trong tương lai

const getAllData = new Promise((resolve, reject) => {
  setTimeout(() => {
    var database = ["HN","DN","SG"];
      resolve(database);
    reject(new Error ("Da xay ra loi khi doc DB"));
    console.log("getting data form DB");
    
  },3000);
})
getAllData.then((data) => 
  console.log("data",data)).catch((err) => console.log(err))







//ES5
// function person(name, age) {
//   return {
//     name: name,
//     age: age,
//     getName: function () {
//       return this.name + " " + this.age;
//     },
//   };
// }
