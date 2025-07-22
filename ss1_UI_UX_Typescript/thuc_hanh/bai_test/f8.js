//Enhanced Object Literals
//1.Định nghĩa key: value cho object
//2. Định nghĩa method cho object
//Demo cả 2 cái trên
var name = 'JS';
var price = 1000;
var course = {
    name,
    price,
    getName() {
        return this.name;
    }
};
console.log(course);
console.log(course.getName());
console.log('=============================');

//3. Định nghĩa key cho object dưới dạng biến
var fieldName = 'name';
var fieldPrice = 'price';

const course1 = {
    [fieldName]: 'JS',
    [fieldPrice]: 500
}

console.log(course1);
console.log('=============================');


//Rest
//Sử dụng với destructuring, định nghĩa tham số
//Những trường hợp khác là spread
//Lấy phần còn lại, chỉ được đặt cuối
function logger (a,b,...rest) {
    console.log(rest);
}

logger(1,2,3,4);
console.log('=============================');

//Spread








