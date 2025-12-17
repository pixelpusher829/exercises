// Import necessary data and data filtering functions.
import salaryData, { getDataByRole, getDataByCompany } from "./salaryData.js";

// Calculates the average salary for a specific role.
const getAverageSalaryByRole = (role) => {
	const roleData = getDataByRole(role);
	const salariesOfRole = roleData.map((obj) => obj.salary);
	return calculateAverage(salariesOfRole);
};

// Calculates the average salary for a specific company.
const getAverageSalaryByCompany = (company) => {
	const companyData = getDataByCompany(company);
	const salariesAtCompany = companyData.map((obj) => obj.salary);
	return calculateAverage(salariesAtCompany);
};

// Retrieves the salary for a specific role at a specific company.
const getSalaryAtCompany = (role, company) => {
	const companyData = getDataByCompany(company);
	const roleAtCompany = companyData.find((obj) => obj.role === role);
	return roleAtCompany.salary;
};

// Calculates the overall industry average salary.
const getIndustryAverageSalary = () => {
	const allSalaries = salaryData.map((obj) => obj.salary);
	return calculateAverage(allSalaries);
};

// Helper function to compute the average of an array of numbers.
function calculateAverage(arrayOfNumbers) {
	let total = 0;
	arrayOfNumbers.forEach((number) => (total += number));
	return (total / arrayOfNumbers.length).toFixed(2);
}

export {
	getAverageSalaryByRole,
	getAverageSalaryByCompany,
	getSalaryAtCompany,
	getIndustryAverageSalary,
};
