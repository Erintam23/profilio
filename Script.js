// Footer: Display copyright with current year
const footer = document.getElementById('footer');
const currentDate = new Date();
const currentYear = currentDate.getFullYear ();
footer.innerHTML = `&copy; Your Name, ${currentYear}`;
console.log (`Today's date is : ${currentDate}`);