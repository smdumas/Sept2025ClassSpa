
// this function does math .random multipled by 1k
// the next function is setTimeout takes 2 arguments one is a callback function
// 2 possible scenarios for random finish
// the 3 strings below and the order they will print

function randomFinish(label) {
    const randomTime = Math.random() * 1000;

    setTimeout(() => console.log(label + "is done!"), randomTime);
}

randomFinish("function 1");
randomFinish("function 2");
randomFinish("function 3");


