const promise = new Promise(function (resolve, reject) {
    resolve('OK')
})

const cows = 15; 
const countCows = new Promise(function(resolve, reject){
    if(cows > 10){
        resolve('OK')
    }else{
        reject("No cows in the farm")
    }
})

countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(()=>console.log('END'));