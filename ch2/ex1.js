/* Chapter 2 Exercise 1
   Prints the pattern
   *
   **
   ***
   ****.....
 */
var str = ""
const hash = "#"
const numberLines = 7

for (var i=0; i < numberLines; i++){
    str+=hash;
    console.log(str)
}
