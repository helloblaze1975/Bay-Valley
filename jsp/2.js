

// let catName = "Oliver";
// let catName = "Meow";
// console.log(catName);
// ///
// const increment = (number, value= 1) => number + value;
// console.log(increment(5));

// /////////////////////////////////////////////////////////////////////////////////////////////////////// 
// var printNumF;
// for (var i = 0; i < 7; i= i+2) {
//   if (i === 6) {
//     printNumF = function() {
//       return i;
//     };
//   }
// }
// console.log(printNumF());
// console.log(i);
// /////////////////////////////////////////////////////////////////////////////////////////////////////
// var printNumTwo;
// for (let i = 0; i < 3; i++) {
//   if (i === 2) {
//     printNumTwo = function() {
      
//       return i;
//     };
     
//   }
// }
// console.log(printNumTwo());

// //////////////////////////////////////////////////////////////////////////////////////////////////////////

function addThreeNumber(x,y,z){
  console.log(x+y+z)
}
var args = [0,1,2,3]
addThreeNumber(...args)


const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);