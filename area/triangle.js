// Create and add the "Calculate" button dynamically
const btn = document.createElement("button");
btn.textContent = "Calculate";
document.querySelector(".container").appendChild(btn);

btn.addEventListener("click",()=> {
  const br = Number(document.getElementById("b").value.trim());
  const he = Number(document.getElementById("h").value.trim());
  const unit = document.getElementById("unit").value;
  const resultDiv = document.getElementById("div");

  if (isNaN(br) || isNaN(he) || br <= 0 || he <= 0) {
    alert("Check if the entered value contains only positive digits and no extra special characters..");
    return;
  }

  const area = 0.5 * br * he;

  resultDiv.textContent = `Area of the triangle is ${area} ${unit}²`;
});



