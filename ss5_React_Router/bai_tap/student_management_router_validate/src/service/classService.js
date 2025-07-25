export let classList = [
    {
        id:1,
        name:"C02"
    },
    {
        id:2,
        name:"C03"
    },
    {
        id:3,
        name:"C04"
    }
];

export function findAll() {
    return ([...classList]);
}