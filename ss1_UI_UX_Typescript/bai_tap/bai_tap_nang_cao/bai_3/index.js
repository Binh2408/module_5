import {getInfo} from '../bai_3/service.js';

const sv1 = {
    firstName: 'John',
    gender: 'male',
    degree:'Bachelor',
    language: 'English'
}

getInfo(sv1);

const sv2 = {
    gender: 'male',
    degree:'Bachelor',
    language: 'English'
}

getInfo(sv2);

const sv3 = {
    firstName: 'John',
    gender: 'male',
    language: 'English'
}

getInfo(sv3);

const sv4 = {
    gender: 'male',
    language: 'English'
}

getInfo(sv4);