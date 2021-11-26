const bruteSalary = 3600;

if ( bruteSalary <= 1556.94) {
    inssTax = bruteSalary * 0.08;
} else if (bruteSalary <= 2594.92) {
    inssTax = bruteSalary * 0.09;
} else if (bruteSalary <= 5189.82) {
    inssTax = bruteSalary * 0.11;
} else {
    inssTax = 570.88;
}

const baseSalary = bruteSalary - inssTax;

if (baseSalary <= 1903.98) {
    irTax = 0;
} else if (baseSalary <= 2826.65) {
    irTax = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
    irTax = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
    irTax = (baseSalary * 0.225) - 636.13;
} else {
    irTax = (baseSalary * 0.275) - 869.36;
}

const liquidSalary = baseSalary - irTax;

console.log("INSS: " + inssTax);
console.log("IR: " + irTax);
console.log("Salário líquido: " + liquidSalary);