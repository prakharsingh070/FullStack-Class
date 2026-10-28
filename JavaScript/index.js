// let total = 15*60;
// const timer = setInterval( ()=>{
//     total--;
//     let min = Math.floor(total/60);
//     let sec = total % 60;
//     console.log(`${min}:${sec}`);
// },1000);

// setTimeout(() => {
//   clearInterval(timer);
//   console.log("Time is up!");
// }, 15 * 60 * 1000);


let arr=[1,2,3,4,5]
console.log(arr);
let newarr = arr.map( (n)=> {return n*n;});
console.log(newarr);

newarr = arr.filter( n => n>3);
console.log(newarr);

let ele = arr.find(n => n>3);
console.log(ele);

ele = arr.reduce((sum,n) => sum+=n,0);
console.log(ele);

const add = (a,b) => a+b;
console.log(add(5,6));