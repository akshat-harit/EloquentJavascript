/*Chapter 2 Exercise 2
  FizzBuzz for numbers 1 to 100
 */
for(var i = 1; i<=100;i++){
    outputStr = ""
    if(i%3 === 0){
         outputStr += "Fizz" ;
    }
    if(i%5==0){
        outputStr += "Buzz";
    }
    if (outputStr === ""){
        console.log(i);
    }else{
        console.log(outputStr);
    }
}
