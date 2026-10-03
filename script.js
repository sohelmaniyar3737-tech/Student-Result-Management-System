document.getElementById("calculateResult").addEventListener("click", function() {
let studentName = document.getElementById("studentName").value;
let rollNumber = parseInt(document.getElementById("rollNumber").value);
let firstSubject = document.getElementById("firstsubject").value;
let secondSubject = document.getElementById("secondsubject").value;
let thirdSubject = document.getElementById("thirdsubject").value;
let fourthSubject = document.getElementById("fourthsubject").value;
let fifthSubject = document.getElementById("fifthsubject").value;
let sixthSubject = document.getElementById("sixthsubject").value;
let markOfFirstSubject = parseFloat(document.getElementById("firstsubjectmarks").value);
let markOfSecondSubject = parseFloat(document.getElementById("secondsubjectmarks").value);
let markOfThirdSubject = parseFloat(document.getElementById("thirdsubjectmarks").value);
let markOfFourthSubject = parseFloat(document.getElementById("fourthsubjectmarks").value);
let markOfFifthSubject = parseFloat(document.getElementById("fifthsubjectmarks").value);
let markOfSixthSubject = parseFloat(document.getElementById("sixthsubjectmarks").value);

if(
    isNaN(markOfFirstSubject) || isNaN(markOfSecondSubject) || isNaN(markOfThirdSubject) || isNaN(markOfFourthSubject) || isNaN(markOfFifthSubject) || isNaN(markOfSixthSubject)
) {
    alert("Please enter marks for all subjects.");
    return;
}

if(
    markOfFirstSubject < 0 || markOfFirstSubject > 100 ||
   markOfSecondSubject < 0 || markOfSecondSubject > 100 ||
   markOfThirdSubject < 0 || markOfThirdSubject > 100 ||
   markOfFourthSubject < 0 || markOfFourthSubject > 100 ||
   markOfFifthSubject < 0 || markOfFifthSubject > 100 ||
   markOfSixthSubject < 0 || markOfSixthSubject > 100
) {
    alert("Marks must be between 0 and 100.");
    return;
}

let marks = [markOfFirstSubject, markOfSecondSubject, markOfThirdSubject, markOfFourthSubject, markOfFifthSubject, markOfSixthSubject];
let minimumMark = Math.min(...marks);
let minimumIndex = marks.indexOf(minimumMark);
let maximumMark = Math.max(...marks);
let maximumIndex = marks.indexOf(maximumMark);

let subjects = [firstSubject, secondSubject, thirdSubject, fourthSubject, fifthSubject, sixthSubject];
let minimumSubject = subjects[minimumIndex];
let maximumSubject = subjects[maximumIndex];

let totalMarks = markOfFirstSubject + markOfSecondSubject + markOfThirdSubject + markOfFourthSubject + markOfFifthSubject + markOfSixthSubject;
let percentage = (totalMarks / 600) * 100;

let grade;
if(percentage >= 90) {
    grade = "A+";
}
else if(percentage >= 80) {
    grade = "A";
}
else if(percentage >= 70) {
    grade = "B";
}
else if(percentage >= 60) {
    grade = "C";
}
else if(percentage >= 50) {
    grade = "D";
}
else {
    grade = "F";
}

let result;
if(percentage < 50 || grade === "F") {
    result = "Fail";
}
else {
    result = "Pass";
}

let resultMessage = document.getElementById("resultMessage");

resultMessage.classList.remove("pass", "fail");

if(result === "Pass") {
    resultMessage.textContent = "Congratulations! You have passed. 🎉"
    resultMessage.classList.add("pass");
}
else {
    resultMessage.textContent = "Sorry! You need improvement. 🥀"
    resultMessage.classList.add("fail");
}

document.getElementById("result").classList.add("show");
document.getElementById("resultStudentName").textContent = studentName;
document.getElementById("resultRollNumber").textContent = rollNumber;
document.getElementById("resultTotalMarks").textContent = totalMarks;
document.getElementById("resultPercentage").textContent = percentage.toFixed(2) + "%";
document.getElementById("resultGrade").textContent = grade;
document.getElementById("resultStatus").textContent = result;

document.getElementById("minimumSubject").textContent = minimumSubject;
document.getElementById("minimumMarks").textContent = minimumMark;

document.getElementById("maximumSubject").textContent = maximumSubject;
document.getElementById("maximumMarks").textContent = maximumMark;

document.getElementById("circlePercentage").textContent =
    percentage.toFixed(2) + "%";

const circle = document.querySelector(".performance-circle");
const circlePercentage = document.getElementById("circlePercentage");
const performanceText = document.getElementById("performanceText");

let ringColor;

if (percentage >= 90) {
    performanceText.textContent = "Outstanding";
    ringColor = "#28a745";
}
else if (percentage >= 80) {
    performanceText.textContent = "Excellent";
    ringColor = "#28a745";
}
else if (percentage >= 70) {
    performanceText.textContent = "Good";
    ringColor = "#ffc107";
}
else if (percentage >= 60) {
    performanceText.textContent = "Average";
    ringColor = "#fd7e14";
}
else {
    performanceText.textContent = "Need Improvement";
    ringColor = "#dc3545";
}

const angle = percentage * 3.6;

circle.style.background = `
    conic-gradient(
        ${ringColor} ${angle}deg,
        #e9ecef ${angle}deg
    )
`;

circlePercentage.style.color = ringColor;
performanceText.style.color = ringColor;
});