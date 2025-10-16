// Items array
const items = [
  { name: "COKE", price: 40, stock: 15, quantity: 0 },
  { name: "SPRITE", price: 40, stock: 20, quantity: 0 },
  { name: "KIT KAT", price: 20, stock: 10, quantity: 0 },
  { name: "LAYS", price: 10, stock: 13, quantity: 0 },
  { name: "BROWNIE", price: 25, stock: 15, quantity: 0 },
  { name: "DAIRY MILK", price: 20, stock: 15, quantity: 0 },
  { name: "MILKY BAR", price: 20, stock: 15, quantity: 0 },
  { name: "MUNCH", price: 10, stock: 15, quantity: 0 },
  { name: "MAD-ANGLES", price: 20, stock: 15, quantity: 0 },
  { name: "KURKURE", price: 10, stock: 17, quantity: 0 }
];

const vending = document.getElementById("vending");
const totalAmount = document.getElementById("totalAmount");
const discountedAmount = document.getElementById("discountedAmount");
const couponInput = document.getElementById("couponInput"); 
const message = document.getElementById("message");
const paymentSelect = document.getElementById("payment");
const pinContainer = document.getElementById("pinContainer");
const pinInput = document.getElementById("pinInput");

const UPI_PIN = "012345";
const CARD_PIN = "098765";
const COUPON_CODE = "ad1161";

let discountApplied = false;
let totalBeforeDiscount = 0;

items.forEach((product, index) => {
  const div = document.createElement("div");

  div.innerHTML = `
    <p><b>${product.name}</b></p>
    <p>Price: ₹${product.price}</p>
    <p id="stock-${index}">Stock: ${product.stock}</p>
    <p id="qty-${index}">Quantity: ${product.quantity}</p>
    <p id="subtotal-${index}">Subtotal: ₹0</p>
    <button id="add-${index}">Add</button>
    <button id="remove-${index}">Remove</button>
    <hr>
  `;

  vending.appendChild(div);

  document.getElementById(`add-${index}`).onclick = () => addItem(index);
  document.getElementById(`remove-${index}`).onclick = () => removeItem(index);
});

function addItem(index) {
  if (items[index].stock > 0) {
    items[index].stock--;
    items[index].quantity++;
    updateDisplay(index);
    updateTotal();
  } else {
    alert( items[index].name + " is out of stock");
  }
}

function removeItem(index) {
  if (items[index].quantity > 0) 
    {
    items[index].stock++;
    items[index].quantity--;
    updateDisplay(index);
    updateTotal();
  } 
  else {
    alert("The cart is already empty!");
  }
}

function updateDisplay(index) {
  document.getElementById(`qty-${index}`).textContent = "Quantity: " + items[index].quantity;
  document.getElementById(`stock-${index}`).textContent = "Stock: " + items[index].stock;
  document.getElementById(`subtotal-${index}`).textContent = "Subtotal: ₹" + (items[index].price * items[index].quantity);
}

function updateTotal() {
  let total = 0;
  items.forEach(i => 
    total += i.price * i.quantity
  );
  totalBeforeDiscount = total;

  if (discountApplied) {
    const discounted = totalBeforeDiscount - (totalBeforeDiscount * 0.15);
    discountedAmount.textContent = "Discounted Total: ₹" + discounted;
  } else {
    discountedAmount.textContent = "";
  }

  totalAmount.textContent = totalBeforeDiscount;
}

function applyDiscount() {
  const code = couponInput.value.trim();

  if (code === COUPON_CODE) {
    discountApplied = true;
    const discounted = totalBeforeDiscount - (totalBeforeDiscount * 0.15);
    discountedAmount.textContent = "Discounted Total: ₹" + discounted.toFixed(2);
    message.textContent = "15% discount applied!";
  } else {
    message.textContent = "Invalid coupon code.";
  }
}

function completePayment() {
  const method = paymentSelect.value;
  let total = totalBeforeDiscount;

  if (discountApplied) {
    total = totalBeforeDiscount - (totalBeforeDiscount * 0.15);
  }

  if (total === 0) {
    message.textContent = " The cart is empty...";
    return;
  }

  if (method === "") {
    message.textContent = "Please select a payment method to proeed with.";
    return;
  }

  if (method === "Cash") {
    message.textContent = `Paid ₹${total.toFixed(2)} successfully`;
    resetCart();
  } else {
    const pin = pinInput.value;
    if ((method === "UPI" && pin === UPI_PIN) || (method === "Card" && pin === CARD_PIN)) {
      message.textContent = `Paid ₹${total.toFixed(2)} via ${method}.`;
      resetCart();
    } else {
      message.textContent = "Invalid PIN,try again...";
    }
  }
}

paymentSelect.addEventListener("change", () => {
  const method = paymentSelect.value;
  if (method === "Card" || method === "UPI") {
    pinContainer.style.display = "block";
  } else {
    pinContainer.style.display = "none";
  }
  pinInput.value = "";
  message.textContent = "";
});



function resetCart() {
  items.forEach((p, i) => {
    p.quantity = 0;
    updateDisplay(i);
  });
  updateTotal();
  couponInput.value = "";
  discountedAmount.textContent = "";
  discountApplied = false;
  pinInput.value = "";
}





