
function test1 () {
    return new Promise(resolve => {
        resolve('result 1');
    })
}

function test2 () {
    return new Promise(resolve => {
        resolve('result 2');
    })
}

function test3 () {
    return new Promise(resolve => {
        resolve('result 3');
    })
}

function test4 () {
    return new Promise(resolve => {
        resolve('result 4');
    })
}

async function excuse1() {
    const res = await test1();
    console.log(res);
}
async function excuse2() {
    const res = await test2();
    console.log(res);
}
async function excuse3() {
    const res = await test3();
    console.log(res);
}
async function excuse4() {
    const res = await test4();
    console.log(res);
}

function onClick() {
    excuse1();
    excuse2();
    excuse3();
    excuse4();
}


onClick();