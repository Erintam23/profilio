// Set up the footer with the current year and today's full date
const footer = document.querySelector("footer p");
const currentYear = new Date().getFullYear();
console.log(currentYear);
const todayDate = new Date().toDateString();
footer.textContent = `© ${currentYear} Erin Tam. All Rights Reserved. | Today's Date: ${todayDate}`;

// Portfolio Greeting
const currentHour = new Date().getHours();
const greetingElement = document.getElementById("Greeting");
console.log (currentHour);

if (currentHour < 12) {
    greetingElement.textContent = "Good Morning!";
} else if (currentHour < 17) {
    greetingElement.textContent = "Good Afternoon!";
} else {
    greetingElement.textContent = "Good vening!";
}

// Alert Button
function showAlert() {
    alert('Hello World! WOW ! You sucessfully find my website and thank you for visting! Have a wonderful day !');
}

// Hover Button: Change text on hover
alertButton.addEventListener('mouseover', () => {
    alertButton.textContent = 'Hovered!';
});
alertButton.addEventListener('mouseout', () => {
    alertButton.textContent = 'Click me';
});

// Populate Ordered List with Odd/Even Numbers
const numbersList = document.getElementById('numbers');
for (let i = 1; i <= 12; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = i % 2 === 0 ? 'Even' : 'Odd';
    numbersList.appendChild(listItem);
}