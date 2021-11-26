let grade = 150;

if (grade >= 90 && grade <= 100) {
    console.log("Grade A");
} else if (grade >= 80 && grade < 90 ) {
    console.log("Grade B");
} else if (grade >= 70 && grade < 80 ) {
    console.log("Grade C");
} else if (grade >= 60 && grade < 70 ) {
    console.log("Grade D");
} else if (grade >= 50 && grade < 60 ) {
    console.log("Grade E");
}  else if (grade < 50) {
    console.log("Grade F");
} else if (grade > 100 || grade < 0) {
    console.log("Error: Invalid entry")
}