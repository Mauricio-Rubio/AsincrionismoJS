function sum(a,b) {
    return a+b;
}
function calc(a,b, callback) {
    return callback(a,b);
}

// console.log(calc(2,3,sum));
function hello(name) {
    console.log(`Hy ${name}`);
}

setTimeout(hello, 1000, 'Mauricio');
    
 