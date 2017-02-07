/* Chapter 2 Exercise 3
   Prints a chessboard like pattern
 */


const size = 8;

const white = " ";
const black = "#";


// Generate the two different patterns that will repeat
var pattern1 = "";
var pattern2 = "";
for(var i = 0; i<Math.trunc(size/2); i++){
    pattern1 += white+black;
    pattern2 += black+white;
}

if (size%2 == 1){
    pattern1+=white;
    pattern2+=black
}

// Actual printing
for(var i = 0; i<Math.trunc(size/2); i++){
    console.log(pattern1);
    console.log(pattern2);
}
if (size %2 == 1){
    console.log(pattern1);
}
