const jobList = [
    {
        name: "Dọn nhà"
    },
    {
        name:"Dọn bếp"
    }
]

export function getAll() {
    return [...jobList];
}

export function add(job) {
    jobList.push(job);
}