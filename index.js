// var myObj = {
//     name: "Ayush",
//     show: showName
// };
// myObj.show();
// function showName(){
//     console.log(myObj.name);
// }


// const arr = [1,2,3]
// console.log(arr.push(6));
// console.log(arr.pop());

// console.log(arr);

// WAP to check if a number is armstrong or not
function isArmstrong(n){

    let a = n;
    const digits = a.toString().split('');
    const power = digits.length;

    let sum = 0;
for (let i = 0; i < power; i++) {
    sum += Math.pow(Number(digits[i]), power);
}


if (sum === a) {
    return true;
} else {
    return false;

}
}

function check(){
    let val = document.getElementById("val").value;
    let para = document.createElement("p");
    if(isArmstrong(val)){
        para.textContent = "It is an ArmStrong Number"
    }
    else{
        para.textContent = "It is not an ArmStrong Number";
    }
    document.getElementsByTagName("body")[0].append(para);
}
