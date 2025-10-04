    let student = {
      name: "DHIYA",
      birthYear: "2000",
      city: "TIRUPUR"
    }

    function saveProfile()
     {
      try {
        let name = document.getElementById("name").value.trim();
        let birthYear = document.getElementById("birthYear").value.trim();
        let city = document.getElementById("city").value.trim();
       
        if (!name||!birthYear||!city)
         throw "Please fill all fields correctly!";
Year=parseInt(birthYear);
        document.getElementById("profileOutput").innerText =
          "Profile Saved::"+ name + " , "+city+ " , " + birthYear;
          
      } 
      catch (error) 
      {
        document.getElementById("profileOutput").innerText = error;
      }
    }

    function checkAge() 
    {
      try {
        if (!birthYear) throw " Fill all the fields completely!";
        let currentYear = new Date().getFullYear();
        birthYear = document.getElementById("birthYear").value.trim();
         Year=parseInt(birthYear);
        let age = currentYear - Year;
        let eligibility = (age >= 18) ? "Eligible (18+)" : "You are not eligible to access this website since you are a minor.";
        document.getElementById("ageOutput").innerText =
          name+"You are"+ age +"years old"+" & "+ eligibility;
      } catch (error) {
        document.getElementById("ageOutput").innerText = error;
      }
    }

    function showGreeting() 
    {
      let hours = new Date().getHours();
      let greeting ;
      if (hours < 12) greeting = " Good Morning";
      else if (hours < 18) greeting = "Good Afternoon";
      else greeting = "Good Evening";

      document.getElementById("greetOutput").innerText =
        greeting + name || "Student";
    }

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
        document.getElementById("calcOutput").innerText = result;
      }
       catch (error) {
        document.getElementById("calcOutput").innerText = error;
      }
    }

    const quotes = 
    [
      "Believe you can and you are halfway there.",
      "A journey of thousand miles start with a single step.",
      "All our dreams come true if we have the courage to pursue them.",
      "It always seems impossible until it is done.",
      "You dont have to see the whole staircase, just take the first step."
    ];

    function showQuote() 
    {
      let randomIndex = Math.floor(Math.random() * quotes.length);
      document.getElementById("quoteOutput").innerText = quotes[randomIndex];
    }

    function showJSON() 
    {
    document.getElementById("jsonOutput").innerText =
    JSON.stringify(student, null , 2);
    }