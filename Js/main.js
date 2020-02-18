
// calling DOM elements
// div that displays the selected table
var table = document.getElementById('table_display');

// table buttons
var invoiceBtn = document.getElementById('invoice');
var clientsBtn = document.getElementById('clients');
var financeBtn = document.getElementById('finance');




// click event listeners on the table buttons
invoiceBtn.addEventListener('click', invoiceFunction);
//combine both functions for displaying the table and the charts
function invoiceFunction(){
	functionDisplayInvoices();
	displayinvoicesCharts();
	invoiceActivated();

}

// function to display the table
function functionDisplayInvoices(){
if(document.getElementById('financeTable').style.display === "table" || document.getElementById('clientsTable').style.display === "table"){
	document.getElementById('invoiceTable').style.display = "table";
	document.getElementById('clientsTable').style.display = "none";
	document.getElementById('financeTable').style.display = "none";
	// document.getElementById('#filter01').style.display = "inline";
}
else{
	document.getElementById('invoiceTable').style.display = "table";
}
};

function invoiceActivated(){
document.getElementById("invoice").setAttribute("class", "active");
document.getElementById("clients").removeAttribute("class", "active");
document.getElementById("finance").removeAttribute("class", "active");
}

// function to display the charts
function displayinvoicesCharts(){
	if($("#client_default_charts").css("display", "flex")  || $("#finance_default_charts").css("display", "flex")) {
	document.getElementById('client_default_charts').style.display = "none";
	document.getElementById('finance_default_charts').style.display = "none";
	document.getElementById('default_charts').style.display = "none";
	// $("#finance_default_charts").show();
	document.getElementById('invoice_default_chart').style.display = "flex";

	}
	else{
			document.getElementById('invoice_default_chart').style.display = "flex";

	}
};
// end of invoice event listeners



// clients event listeners

clientsBtn.addEventListener('click', clientsFunction);
function clientsFunction(){
functionDisplayClients();
displayclientsCharts();
clientsActivated();
};

// function to display the clients table
function functionDisplayClients(){
if(document.getElementById('invoiceTable').style.display === "table" || document.getElementById('financeTable').style.display === "table"){
	document.getElementById('invoiceTable').style.display = "none";
	document.getElementById('clientsTable').style.display = "table";
	document.getElementById('financeTable').style.display = "none";
	
}
else{
	document.getElementById('clientsTable').style.display = "table";
}
};
function clientsActivated(){
document.getElementById("clients").setAttribute("class", "active");
document.getElementById("invoice").removeAttribute("class", "active");
document.getElementById("finance").removeAttribute("class", "active");
}

// function to display the charts
function displayclientsCharts(){
	if($("#default_charts").css("display", "flex")  || $("#finance_default_charts").css("display", "flex")) {
	document.getElementById('default_charts').style.display = "none";
	document.getElementById('finance_default_charts').style.display = "none";
		document.getElementById('invoice_default_chart').style.display = "none";
	// $("#finance_default_charts").show();
	document.getElementById('client_default_charts').style.display = "flex";

	}
	else{
			document.getElementById('client_default_charts').style.display = "flex";

	}
};

// end of clients event listener








// finance event listener
financeBtn.addEventListener('click', financeFunctions);
function financeFunctions(){
	displayfinanceCharts();
	functionDisplayFinance();
	financeActivated();
};
//table display function
function functionDisplayFinance(){
if(document.getElementById('clientsTable').style.display === "table" || document.getElementById('invoiceTable').style.display === "table"){
	document.getElementById('invoiceTable').style.display = "none";
	document.getElementById('clientsTable').style.display = "none";
	document.getElementById('financeTable').style.display = "table";
	
	}
else{
	document.getElementById('financeTable').style.display = "table";
}
};

function financeActivated(){
document.getElementById("finance").setAttribute("class", "active");
document.getElementById("invoice").removeAttribute("class", "active");
document.getElementById("clients").removeAttribute("class", "active");
}
// function to display the charts
function displayfinanceCharts(){
	// alert("hello");
	if($("#default_charts").css("display", "none")  || $("#client_default_charts").css("display", "flex")) {
	document.getElementById('default_charts').style.display = "none";
	document.getElementById('client_default_charts').style.display = "none";
		document.getElementById('invoice_default_chart').style.display = "none";
	document.getElementById('finance_default_charts').style.display = "flex";
	document.getElementById("finance").setAttribute("class", "active");
	$("#finance_default_charts").css("justify-content", "space-between");
}
else{
		document.getElementById('finance_default_charts').style.display = "table";
		document.getElementById("finance").removeAttribute("class", "active");

}

};




