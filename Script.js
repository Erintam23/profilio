// Set up the footer with the current year and today's full date
const footer = document.querySelector("footer p");
const currentYear = new Date().getFullYear();
console.log(currentYear);
const todayDate = new Date().toDateString();
footer.textContent = `© ${currentYear} Erin Tam. All Rights Reserved. | Today's Date: ${todayDate}`;

// Portfolio Greeting
const currentHour = new Date().getHours();
const greetingElement = document.getElementById("Greeting");

if (currentHour < 12) {
    greetingElement.innerText = "Good Morning!";
    greetingElement.classList.add("Morning");
} else if (currentHour < 17) {
    greetingElement.innerText = "Good Afternoon!";
    greetingElement.classList.add("Afternoon");
} else {
    greetingElement.innerText = "Good Evening!";
    greetingElement.classList.add("Evening");
}

// Alert Button
function showAlert() {
    alert('Hello World! WOW ! You successfully found my website and thank you for visting! Have a wonderful day !');
}

// Hover Button: Change text on hover
const alertButton = document.querySelector('button')
alertButton.addEventListener('mouseover', () => {
    alertButton.innerText = 'Here!';
});
alertButton.addEventListener('mouseout', () => {
    alertButton.innerText = 'Click Me';
});

// List with Odd/Even Numbers

const numbersList = document.getElementById("numbers");
for (let i = 1; i <=12; i++) {
    const listItem = document.createElement("li");
if (i % 2 === 0) {
    listItem.textContent = `Item ${i}: Even`;
} else {
    listItem.textContent = `Item ${i}: Odd`;
}
numbersList.appendChild(listItem);
}