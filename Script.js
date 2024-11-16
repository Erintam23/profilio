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
    greetingElement.textContent = "Good morning!";
} else if (currentHour < 17) {
    greetingElement.textContent = "Good afternoon!";
} else {
    greetingElement.textContent = "Good evening!";
}

// Alert Button
const alertButton = document.getElementById('btn-alert');
alertButton.addEventListener('click', () => {
    alert('Hello world!');
});

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