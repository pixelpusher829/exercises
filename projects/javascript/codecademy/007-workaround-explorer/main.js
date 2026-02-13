// Import necessary modules for data, calculations, and utility functions.
import { getRoles, getCompanies } from "./modules/salaryData.js";
import {
	getAverageSalaryByRole,
	getAverageSalaryByCompany,
	getSalaryAtCompany,
	getIndustryAverageSalary,
} from "./modules/workAroundModule.js";
import { formatNumber } from "./modules/utilities.js";

// Initialize data by getting companies and roles.
const companies = getCompanies();
const roles = getRoles();

// Render input buttons for companies and roles dynamically.
renderInputButtons(companies, "company");
renderInputButtons(roles, "role");

// Function to create and render a section of radio buttons based on provided labels.
function renderInputButtons(labels, groupName) {
	const container = document.createElement("section");
	container.setAttribute("id", `${groupName}Inputs`);

	let header = document.createElement("h3");
	header.innerText = `Select a ${groupName}`;
	container.appendChild(header);

	labels.forEach((label) => {
		let divElement = document.createElement("div");
		divElement.setAttribute("class", "option");

		let inputElement = document.createElement("input");
		inputElement.setAttribute("type", "radio");
		inputElement.setAttribute("name", groupName);
		inputElement.setAttribute("value", label);
		divElement.appendChild(inputElement);

		let labelElement = document.createElement("label");
		labelElement.setAttribute("for", label);
		labelElement.innerText = label;
		divElement.appendChild(labelElement);

		inputElement.addEventListener("click", updateResults);

		container.appendChild(divElement);
	});

	document.querySelector("main").prepend(container);
}

// Function to update the displayed salary results based on current selections.
function updateResults() {
	const company = document.querySelector("input[name='company']:checked")?.value;
	const role = document.querySelector("input[name='role']:checked")?.value;

	if (!company || !role) {
		return;
	}

	// Calculate various salary metrics using imported functions.
	const averageSalaryByRole = formatNumber(getAverageSalaryByRole(role));
	const averageSalaryByCompany = formatNumber(getAverageSalaryByCompany(company));
	const salary = formatNumber(getSalaryAtCompany(role, company));
	const industryAverageSalary = formatNumber(getIndustryAverageSalary());

	// Update the DOM with the calculated salary information.
	document.getElementById("salarySelected").innerText = `The salary for ${role}s at ${company} is \$${salary}`;
	document.getElementById("salaryAverageByRole").innerText = `The industry average salary for ${role} positions is \$${averageSalaryByRole}`;
	document.getElementById("salaryAverageByCompany").innerText = `The average salary at ${company} is \$${averageSalaryByCompany}`;
	document.getElementById("salaryAverageIndustry").innerText = `The average salary in the Tech industry is \$${industryAverageSalary}`;
}
