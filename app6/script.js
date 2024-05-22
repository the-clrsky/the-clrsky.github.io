document.getElementById("printButton").addEventListener("click", function () {
	// Get form data
	let nameField = document.getElementById("name").value;
	let ageField = document.getElementById("age").value;
	let favSportType = document.querySelector('input[name="type"]:checked').value;
	let favSportWatch = document.getElementById("favorite-sport").value;
	let favSportPlay = document.getElementById("favorite--sport").value;
	let favSportsPerson = document.getElementById("favorite-sport-person").value;
	let feedback = document.getElementById("feedback").value;
  
	// Create a new window for printing
	const printWindow = window.open("", "Print Survey", "width=1000,height=800");
  
	// print window
	let printContent = `
	  <!DOCTYPE html>
	  <html lang="en">
	  <head>
		<title>Survey Results</title>
		<style>
		  table {
			border-collapse: collapse;
			width: 100%;
		  }
		  th, td {
			padding: 8px;
			border: 1px solid #ddd;
			text-align: left;
		  }
		</style>
	  </head>
	  <body>
		<h1>Survey Results</h1>
		<table>
		  <tr>
			<th>Name:</th>
			<td>${nameField}</td>
		  </tr>
		  <tr>
			<th>Age:</th>
			<td>${ageField}</td>
		  </tr>
		  <tr>
			<th>Favorite Sport Type:</th>
			<td>${favSportType}</td>
		  </tr>
		  <tr>
			<th>Favorite Sport to Watch:</th>
			<td>${favSportWatch}</td>
		  </tr>
		  <tr>
			<th>Favorite Sport to Play:</th>
			<td>${favSportPlay}</td>
		  </tr>
		  <tr>
			<th>Favorite Sportsperson:</th>
			<td>${favSportsPerson}</td>
		  </tr>
		  <tr>
			<th>Thoughts on Sports:</th>
			<td>${feedback}</td>
		  </tr>
		</table>
	  </body>
	  </html>
	`;
  
	// print window's content
	printWindow.document.write(printContent);
  
	// Close the print window
	setTimeout(function () {
	  printWindow.print();
	  printWindow.close();
	}, 200);
  });
  