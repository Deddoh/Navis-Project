
// calling DOM elements
// div that displays the selected table
var table = document.getElementById('table_display');

// table buttons
var invoiceBtn = document.getElementById('invoice');
var clientsBtn = document.getElementById('clients');
var financeBtn = document.getElementById('finance');


// click event listeners on the table buttons
invoiceBtn.addEventListener('click', functionDisplayInvoice);
function functionDisplayInvoice(){
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

clientsBtn.addEventListener('click', functionDisplayClients);
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


financeBtn.addEventListener('click', functionDisplayFinance);
function functionDisplayFinance(){
if(document.getElementById('clientsTable').style.display === "table" || document.getElementById('invoiceTable').style.display === "table"){
	document.getElementById('invoiceTable').style.display = "none";
	document.getElementById('clientsTable').style.display = "none";
	document.getElementById('financeTable').style.display = "table";
// document.getElementById('#filter03').style.display = "inline";

	
}
else{
	document.getElementById('financeTable').style.display = "table";
}
};

// display the invoice table by default on loading the window
function invoiceTableByDefault(){
	$("#invoiceTable").show();
}
