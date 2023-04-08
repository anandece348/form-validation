// selector's  of elements
const container = document.querySelector(".container");
const nameOfCandidate1 = document.getElementById("name");
const fatherName1 = document.getElementById("father-name");
const motherName1 = document.getElementById("mother-name");
const emailId1 = document.getElementById("email-id")
const mobileNumber1 = document.getElementById("mobile-number");
const nationality1 = document.getElementById("nation");
const gender1 = document.getElementById("gender");

const queryParamas =   new URLSearchParams(location.search);
console.log(queryParamas);
// data of an elements 
const nameOfCandidates = queryParamas.get("name");
const fatherName = queryParamas.get("father-name")
const motherName = queryParamas.get("mother-name");
const emailId = queryParamas.get("email-id");
const mobileNumber = queryParamas.get("mobile-number");
const nationality = queryParamas.get("Nationality");
console.log(nationality);
nameOfCandidate1.innerHTML = nameOfCandidates;
// add data to the correspondence element
fatherName1.innerHTML = fatherName;
motherName1.innerHTML = motherName;
emailId1.innerHTML = emailId;
mobileNumber1.innerHTML = mobileNumber;
nationality1.innerHTML = nationality;


// file:///F:/Project/form-validation/data.html?name=Anand+Sahu&email-id=anandece2608%40gmail.com&mobile-number=8252053691&father-name=Suraj+Narayna+Sahu&mother-name=Shiv+Devi&gender=on&Nationality=Indian&password=12345678&confirm-password=12345678