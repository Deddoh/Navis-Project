
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

// function to display the charts
function displayinvoicesCharts(){
	if($("#client_default_charts").css("display", "flex")  || $("#finance_default_charts").css("display", "flex")) {
	document.getElementById('client_default_charts').style.display = "none";
	document.getElementById('finance_default_charts').style.display = "none";
	// $("#finance_default_charts").show();
	document.getElementById('default_charts').style.display = "flex";

	}
	else{
			document.getElementById('client_default_charts').style.display = "flex";

	}
};
// end of invoice event listeners



// clients event listeners

clientsBtn.addEventListener('click', clientsFunction);
function clientsFunction(){
functionDisplayClients();
displayclientsCharts();
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

// function to display the charts
function displayclientsCharts(){
	if($("#default_charts").css("display", "flex")  || $("#finance_default_charts").css("display", "flex")) {
	document.getElementById('default_charts').style.display = "none";
	document.getElementById('finance_default_charts').style.display = "none";
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


// function to display the charts
function displayfinanceCharts(){
	// alert("hello");
	if($("#default_charts").css("display", "none")  || $("#client_default_charts").css("display", "flex")) {
	document.getElementById('default_charts').style.display = "none";
	document.getElementById('client_default_charts').style.display = "none";
	// $("#finance_default_charts").css("background", "blue");
	// $("#finance_default_charts").show();
	document.getElementById('finance_default_charts').style.display = "flex";
}
else{
		document.getElementById('finance_default_charts').style.display = "flex";

}

};




