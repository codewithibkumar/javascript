
/*  window.onload = function greet()
  {
      alert('Welcome to JavaScript');
  }
*/
 function greet()
 {
  var name =   prompt("What is your name?","Hi User");
  
  var status = confirm("Do you like javascript?");
  alert(name+' welcome to javascript '+status);

  if(status){
    document.write("Wow You are interested in javascript");
  }else{
    document.write("Thanks for feedback");
  }
 }
 /*window.onload = function sum()
 {
   var num1 = prompt("Enter first number: ");
   var num2 = prompt("Enter second number: ");
   var result = parseInt(num1) + parseInt(num2);
   alert("Sum is: "+result);
 }*/
