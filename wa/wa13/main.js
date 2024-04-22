//PROBLEM 1: Create JSON for each employee with the following details (first name, department, designation, salary, raise eligible) 
const employees = [
    {
        firstName: "Sam",
        department: "Tech",
        designation: "Manager",
        salary: 40000,
        raiseEligible: true
    },
    {
        firstName: "Mary",
        department: "Finance",
        designation: "Trainee",
        salary: 18500,
        raiseEligible: true
    },
    {
        firstName: "Bill",
        department: "HR",
        designation: "Executive",
        salary: 21200,
        raiseEligible: false
    }
];

console.log("Employees JSON:", employees);

//PROBLEM 2: Create JSON for the company with the following details (companyName, website, employees) 
const company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: employees
};

console.log("Company JSON:", company);

//PROBLEM 3: A new employee has joined the company. Update the JSON from problems 1 and 2 to reflect the addition of: 
const newEmployee = {
    firstName: "Anna",
    department: "Tech",
    designation: "Executive",
    salary: 25600,
    raiseEligible: false
};

company.employees.push(newEmployee);
console.log("Updated Company JSON:", company);

//PROBLEM 4: Given the JSON for the company, calculate the total salary for all company employees.
let totalSalary = 0;
company.employees.forEach(employee => {
    totalSalary += employee.salary;
});
console.log("Total Salary for all employees:", totalSalary);

//PROBLEM 5: It's raise time. If an employee is raise eligible, increase their salary by 10%. Given the JSON of the company and its employees, write a function to update the salary for each employee who is raised eligible, then set their eligibility to false.
function giveRaise(company) {
    company.employees.forEach(employee => {
        if (employee.raiseEligible) {
            employee.salary *= 1.10;
            employee.raiseEligible = false;
        }
    });
}

giveRaise(company);
console.log("Updated salaries after giving raise:", company.employees);

//PROBLEM 6: Some employees have decided to work from home. The following array indicates who is working from home. Use the array to update the company JSON. For each employee, add another property called 'wfh' and set it to true of false 
const employeesWorkingFromHome = ['Anna', 'Sam'];

company.employees.forEach(employee => {
    if (employeesWorkingFromHome.includes(employee.firstName)) {
        employee.wfh = true;
    } else {
        employee.wfh = false;
    }
});

console.log("Updated Company JSON with WFH status:", company);
