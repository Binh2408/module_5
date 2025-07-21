import {person} from '../bai_2/service.js';

//destructuring + rest
const {firstName, gender,education,languages,...rest} = person;
const student = {
    firstName,
    gender,
    education: education.degree,
    languages: languages[0],
    //áp dụng spread
    //...rest
};
console.log(student);
 
