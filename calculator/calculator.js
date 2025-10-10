   function calculate(op)
     {
      try {
        let num1 = parseFloat(document.getElementById("num1").value);
        let num2 = parseFloat(document.getElementById("num2").value);
         if (isNaN(num1)||isNaN(num2)) throw "Please enter valid number!";
       

        if (op=="add") result = num1 + num2;
        else if (op=="sub") result = num1 - num2;
        else if (op=="mul") result = num1 * num2;
        else if (op=="div")
           {
          if (num2==0) throw "Division by zero is not valid!";
          result = num1/num2;
           }
        document.getElementById("calcOutput").innerText ="Calculated Value:"+result;
      }
       catch (error) {
        document.getElementById("calcOutput").innerText = error;
      }
    }