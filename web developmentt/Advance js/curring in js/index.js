//https://www.youtube.com/watch?v=vQcCNpuaJO8
//by bind method
// let multiply = function(x,y){
//     console.log(x*y);
// }



// let multiplyByTwo = multiply.bind(this,2);
// multiplyByTwo(5);

// let multiplyByThree = multiply.bind(this,3);
// multiplyByThree(5);

//by function closer

let mutiply = function (x){
    return function(y){
      console.log((x*y));  
    }
}

let multiplyByTwo = mutiply(2);
multiplyByTwo(3);

let multiplyByThree = mutiply(2);
 multiplyByThree(5);