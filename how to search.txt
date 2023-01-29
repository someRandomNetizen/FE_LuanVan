
const arr = [
    {name: 'hiep', fullName: '1123'},
    {name: 'hiep1', fullName: '7'},
    {name: 'hiep2', fullName: '778'},
];


arr.forEach(item => {
    // search
    if(item.name.includes('1') || item.fullName.includes('23')) {
        console.log(item);
    }
});