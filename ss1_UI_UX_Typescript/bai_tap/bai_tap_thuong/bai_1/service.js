export function getHighRate(courseList, minRating) {
    return courseList.filter(course => course.rating >= minRating);
}