// ===============================
// UMS Drinking Water
// WhatsApp Booking System
// ===============================

let whatsappNumber = "";

const orderForm = document.getElementById("orderForm");
const bookBtn = document.getElementById("bookBtn");

bookBtn.addEventListener("click", function () {
  whatsappNumber = document.getElementById("whatsappNumber").value;

const name = document.getElementById("name").value.trim();
const phone = document.getElementById("phone").value.trim();
const address = document.getElementById("address").value.trim();
const tank = document.getElementById("tank").value;
const quantity = document.getElementById("quantity").value;
const note = document.getElementById("note").value.trim();

if(name === "" || phone === "" || address === ""){
alert("Please fill all required fields.");
return;
}

const phonePattern = /^[0-9]{11}$/;

if(!phonePattern.test(phone)){
alert("Enter a valid 11 digit phone number.");
return;
}

if(quantity < 1){
alert("Quantity must be at least 1.");
return;
}

const message =
`💧 Aqua Pure Water
📦 New Order

👤 Name: ${name}

📱 Phone: ${phone}

📍 Address:
${address}

🛢 Tank:
${tank}

🔢 Quantity:
${quantity}
📝 Note:
${note || "No Note"}
`;
const url =
`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;

window.open(url, "_blank");
alert("✅ Thank you!\nYour order is ready and WhatsApp will open now.");

orderForm.reset();

});

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// ===============================
// Console Message
// ===============================

console.log("UMS Drinking Water Website Loaded Successfully");
