// const ourArray =["Happy",1,2]
// console.log(ourArray(pop()))

// // ourArray.unshift("Happy")
// // console.log(ourArray)

// // const removedFromMyArray = ourArray.pop()
// // console.log(removedFromMyArray)

// // const removedFromMyArray2 = ourArray.shift()
// // console.log(removedFromMyArray2)


let coolString = "Hello World is a tradition";
// // console.log(coolString[7])
console.log(coolString.slice(12:15))
// // console.log(coolString[-1])

// // let aString = "Back to "
// // let bString = "The Future"

// // let res = aString+bString;
// // let res2 ="Back to "+"The Future"
// // console.log(res,res2)

// // function whileLoopQuestion1(number){
// //     let continueBoolean = true;
// //     while (number > 0 ,number--){
// //     console.log("Hello World")
// // }
// // }

// // whileLoopQuestion1(20);
// let nestedArray = [ [1,2,3], [4,5,6], [7,8,9], [[10,11,12],[13,14,15],[16,17,18]], 19];
// console.log(nestedArray[3][0][1])
// console.log(nestedArray[1][1])
// console.log(nestedArray[nestedArray.length-1])
function convertCtoF(celsius){
    const ft = celsius * 9/5 + 32
    return ft
}
console.log(convertCtoF(36))
 



const increment = (number, value= 1) => number + value;
console.log(increment(5));

///// 
var printNumF;
for (var i = 0; i < 7; i= i+2) {
  if (i === 6) {
    printNumF = function() {
      return i;
    };
  }
}
console.log(printNumF());
console.log(i);
////
var printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      
      return i;
    };
     
  }
}
console.log(printNumTwo());

////var i = 0;
while (i < 5){
    console.log(i,"hi");
    i = i +2
    
}
console.log("done!")