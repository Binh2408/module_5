// export function getHighRate(courses, minRating) {
//     const courseList = courses.filter(course => course.rating < minRating);
//     courseList.forEach(({id, title, rating}) => {
//         console.log(`${id}-${title}-${rating}`);
//     });
// }

export function getHighRate(courses, minRating) {
    return courses.filter(course => course.rating < minRating).map(({id,title,rating})=> `${id}-${title}-${rating}`);
   
}