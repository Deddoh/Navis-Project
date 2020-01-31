
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
	
}
else{
	document.getElementById('financeTable').style.display = "table";
}
};


// finance section


// checkbox status

// var checkbox = document.querySelector('confirm');

// checkbox.addEventListener('change', functionDisplayButton);
// 	function functionDisplayButton(){
// 		if(checkbox.checked === true){
// 			document.querySelectorAll('#confirmButtons').style.display = "table";

// 		}
// 		else{
// 			document.querySelectorAll('#confirmButtons').style.display = "none";
// 		}
// 	}


// var checkbox = document.querySelectorAll('.confirm');
// var statusButtons = document.querySelectorAll('.confirmButtons');
// for(var i = 0; i < checkbox.length; i++){
// 	checkbox[i].addEventListener('change', functionDisplayButton);
// 	function functionDisplayButton(){
// 		if(checkbox.checked === true){
// 			for(var j = 0; j < statusButtons.length; j++){
// 			statusButtons.style.display = "table";

// 		}}
// 		// else{
// 		// 	for(var j = 0; j < statusButtons.length; j++){
// 		// 	statusButtons.style.display = "none";

// 		// }
			
// 		//}
// 		}
// 	}
