const allQuestions = [
  { 
    q: "What is the square root of 64?", 
    options: ["3", "8", "5", "6"], 
    answer: "8" 
  },
  { 
    q: "Who is the iron man of India ?", 
    options: ["Saradar Vallabhbhai Patel", "Nehru", "Ambedkar", "Subhash Chandra Bose"], 
    answer: "Saradar Vallabhbhai Patel" 
  },
  { 
    q: "Which element has atomic number 1?", 
    options: ["Helium", "Potassium", "Hydrogen", "Argon"], 
    answer: "Hydrogen" 
  },
  { 
    q: "Which is the largest continent?", 
    options: ["Asia", "Africa", "Europe", "Australia"], 
    answer: "Asia" 
  },
  { 
    q: "Which planet has the most moons?", 
    options: ["Saturn", "Jupiter", "Earth", "Pluto"], 
    answer: "Saturn" 
  },
  { 
    q: "Which is the highest award in India?", 
    options: ["Bharat Ratna", "Nobel prize", "Khel ratna", "Padma Bushan"], 
    answer: "Bharat Ratna" 
  },
  { 
    q: "What is the sqaure of 25?", 
    options: ["625", "225", "50", "2"], 
    answer: "625" 
  }
];
let student = {};
let selectedQuestions = []; 

function reg()
{
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;

    if(!name || !email || !age){
        document.getElementById("reg").innerText="Please fill the required fields";
        return;
    }
    if(age < 12){
        document.getElementById("reg").innerText=("You must be 12 or above to participate!");
        return;
    }

    student.name = name;
    student.email = email;
    student.age = age;

    // Hide registration and quiz becomes visible.
    document.getElementById("registration").style.display = "none";
    document.getElementById("total").style.display = "block";
    let quizDiv = document.getElementById("quiz");
    quizDiv.innerHTML = ""; 
    
    //three questions are randomly taken
    startQuiz();
  }
    function startQuiz() {
    selectedQuestions = allQuestions 
        .sort(() => Math.random()-0.5)
        .slice(0,3);
    let quizDiv = document.getElementById("quiz");

    selectedQuestions.forEach((qObj,index) => {
        let qHTML = `<p>${index+1}.${qObj.q}</p>`;
        qObj.options.forEach(options => {
            qHTML += `<label><input type="radio" name="q${index}" value="${options}"> ${options}</label><br>`;
        });
        quizDiv.innerHTML += qHTML + "<br>";
    });
      
    quizDiv.innerHTML += `<button onclick="submit()">Submit</button>`;
}

    // Promise and delay
    function submit() {
    let selectedAnswers = [];

    // Collect answers BEFORE clearing the quiz div
    selectedQuestions.forEach((qObj,index) => {
        let selected = document.querySelector(`input[name="q${index}"]:checked`);
        selectedAnswers.push(selected ? selected.value : "");
    });

    let quizDiv = document.getElementById("quiz");
    quizDiv.innerHTML = "<p>Calculating your score... please wait</p>";
   
    // Promise to simulate delay
    new Promise((resolve) => {
        setTimeout(() => {
            let score = 0;

            selectedAnswers.forEach((ans, index) =>
               {
                if (ans.trim() === selectedQuestions[index].answer.trim()) {
                    score++;
                }
            });
            resolve(score);
        }, 2000); 
    }).then((score) => {
        let percentage = (score / selectedQuestions.length) * 100;

        let grade = "";
        if (percentage >= 90) grade = "A";
        else if (percentage >= 75) grade = "B";
        else if (percentage >= 50) grade = "C";
        else grade = "D";
        let timestamp = new Date();
        document.getElementById("quiz").style.display = "none";
        document.getElementById("result").style.display = "block";

        document.getElementById("score").innerText = score + " / " + selectedQuestions.length;
        document.getElementById("percentage").innerText = percentage.toFixed(2) + "%";
        document.getElementById("grade").innerText = grade;
        document.getElementById("timespan").innerText = timestamp.toLocaleString();
        student.score = score;
        student.grade = grade;
    });
}
function showJSON() {
    document.getElementById("json").innerText =
        JSON.stringify(student, null , 2);
}