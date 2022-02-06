function greet()
{
    var name = document.getElementById("tuser").value;
    //document.write("Welcome "+name);
    document.getElementById('output1').innerHTML = "Welcome "+name;
    //document.getElementsByClassName()
   
}
function checkEvenOdd()
{
    var num1 = parseInt(document.getElementById("tnum1").value);
    
   if(num1 % 2 == 0)
   {
    document.getElementById("output2").innerHTML=num1 +" is even";
   }
   else{
       document.getElementById("output2").innerHTML=num1+" is odd";
   }

    
}
function calculate(choice)
{
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    if(choice==1)
    {
        document.getElementById("output3").innerHTML="Sum is: "+(num1+num2);
    }
    else if(choice==2)
    {
        document.getElementById("output3").innerHTML="Sub is: "+(num1-num2);
    }
    else if(choice==3)
    {
        document.getElementById("output3").innerHTML="Mul is: "+(num1*num2);
    }
}