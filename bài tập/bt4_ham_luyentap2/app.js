// b1
// function squareNumber(x){
//     return x*x;
// }
// console.log(squareNumber(4))

// b2
// const pi = 3.14;
// function areaCircle(x){
//     return pi*x*x;
// }
// function diameterCircle(x){
//     return 2*pi*x;
// }
// console.log(diameterCircle(2))
// console.log(areaCircle(2))

// b3
// function factorial(x){
//     let count = 1;
//     for (let i = 1; i <= x; i++) {
//         count*=i;
//     }
//     return count;
// }
//
// console.log(factorial(3))

// b4
// let n = prompt("Nhập vào 1 ký tự là:")
// function isNaN(x) {
//     x = Number(x);
//     return x == x;
// }
// console.log(isNaN(n))

// b5
// function findMin(a,b,c){
//     if(a>b){
//         if(a>c){
//             return a;
//         }
//         else {
//             return c;
//         }
//     }
//     else{
//         if(b<c){
//             return c;
//         }
//         else{
//             return b;
//         }
//     }
// }
// console.log(findMin(4,2,3))

// b6
// function checkNaturalNumber(x){
//     if(x>0){
//         return "Số nguyên dương"
//     }
//     else{
//         return "Số nguyên âm"
//     }
// }
//
// console.log(checkNaturalNumber(5))
// b7
// function swapNumber(a,b){
//     let x = a;
//     a = b ;
//     b = x;
//     console.log(a);
//     console.log(b)
// }
//
// swapNumber(1,2);

// b8
// function swapArray(a){
//     let c = [];
//     for (let i = a.length-1; i >= 0; i--) {
//         c.push(a[i])
//     }
//     return c;
// }
// let a = [1,2,3];
// console.log(swapArray(a))

// b9
// let a = (prompt("Nhập vào phần tử a: "))
// n = [1,1,2,2,3,3,5,5,"-",5,6,"-",8,7]
// function checkValue(n,a){
//     let count = 0;
//     for (let i = 0; i < n.length; i++) {
//         if(n[i]==a){
//             count++;
//         }
//     }
//     if(count>0){
//         return count;
//     }
//     else
//         return -1;
// }
//
// console.log(checkValue(n,a))

