const year = document.createElement("input");
year.type = "number";
year.placeholder = "Enter the year";
year.id = "year";
year.className = "input";
document.body.appendChild(year);

const btn = document.createElement("button");
btn.textContent = "CHECK";
btn.className = "btn";
document.body.appendChild(btn);

const div = document.createElement("div");
div.id = "div";
document.body.appendChild(div);

btn.addEventListener("click", () => {
  const y = Number(document.getElementById("year").value.trim());
  div.innerText = isNaN(y) || y <= 0
  ? "Please enter a valid year."
  : (y % 400 === 0 || (y % 4 === 0 && y % 100 !== 0))
  ? `The year ${y} is a leap year.`
  : `The year ${y} is not a leap year.`;
});

