document.addEventListener('DOMContentLoaded', function() {
    const expenseForm = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');
    const totalExpenses = document.getElementById('total-expenses');
    const expenseTitleHeader = document.getElementById('expense-title-header');
    const printReportBtn = document.getElementById('print-report');
    const expenseTitleInput = document.getElementById('expense_title');

    let expenses = [];
    let expenseTitleAdded = false;

    expenseForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const expenseTitle = expenseTitleInput.value;
        const name = document.getElementById('name').value;
        const quantity = parseInt(document.getElementById('quantity').value);
        const unitPrice = parseFloat(document.getElementById('unit_price').value);
        const category = document.getElementById('category').value;

        if (!expenseTitleAdded && expenseTitle && name && !isNaN(quantity) && !isNaN(unitPrice) && category) {
            // If there's no expense title yet, set it and hide the input field
            expenseTitleHeader.textContent = expenseTitle;
            expenseTitleHeader.style.textAlign = "center";
            expenseTitleInput.style.display = "none";
            expenseTitleAdded = true;
        }

        if (expenseTitleAdded && name && !isNaN(quantity) && !isNaN(unitPrice) && category) {
            const amount = quantity * unitPrice;
            const expense = { name, quantity, unitPrice, amount, category };
            expenses.push(expense);
            updateExpenseList();
            updateTotalExpenses();
            expenseForm.reset();
        } else {
            alert('Please fill in all fields with valid numbers.');
        }
    });

    printReportBtn.addEventListener('click', function() {
        // Generate and print report
        printReport();
    });

    function updateExpenseList() {
        expenseList.innerHTML = '';
        let slNumber = 1;
        expenses.forEach(function(expense) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${slNumber}</td>
                <td>${expense.name}</td>
                <td>${expense.quantity}</td>
                <td>${expense.unitPrice}</td>
                <td>${expense.amount}</td>
                <td>${expense.category}</td>
            `;
            expenseList.appendChild(row);
            slNumber++;
        });
    }

    function updateTotalExpenses() {
        const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
        totalExpenses.textContent = total.toFixed(2);
    }

    function printReport() {
        let reportContent = `<h2 style="text-align: center;">${expenseTitleHeader.textContent}</h2>`;
        reportContent += '<table style="border-collapse: collapse; width: 100%;">';
        reportContent += '<thead><tr style="border-bottom: 1px solid #000;"><th style="border-right: 1px solid #000;">SL#</th><th style="border-right: 1px solid #000;">Name</th><th style="border-right: 1px solid #000;">Quantity</th><th style="border-right: 1px solid #000;">Unit Price</th><th style="border-right: 1px solid #000;">Amount</th><th style="border-right: 1px solid #000;">Category</th></tr></thead>';
        reportContent += '<tbody>';
        let slNumber = 1;
        expenses.forEach(function(expense) {
            reportContent += `<tr style="border-bottom: 1px solid #000;"><td style="border-right: 1px solid #000;">${slNumber}</td><td style="border-right: 1px solid #000;">${expense.name}</td><td style="border-right: 1px solid #000;">${expense.quantity}</td><td style="border-right: 1px solid #000;">${expense.unitPrice}</td><td style="border-right: 1px solid #000;">${expense.amount}</td><td>${expense.category}</td></tr>`;
            slNumber++;
        });
        reportContent += '</tbody>';
        reportContent += '</table>';
        reportContent += `<div style="text-align: right; margin-top: 20px;">Total Expenses: ${totalExpenses.textContent}</div>`;
        
        // Create a new window for printing
        const printWindow = window.open('', '_blank');
        printWindow.document.write('<html><head><title>Expense Report</title>');
        printWindow.document.write('<link rel="stylesheet" href="styles.css">');
        printWindow.document.write('<style>body { font-family: Arial, sans-serif; } th, td { border: 1px solid #000; padding: 8px; }</style>');
        printWindow.document.write('</head><body>');
        printWindow.document.write(reportContent);
        printWindow.document.write('</body></html>');
        printWindow.document.close(); // Close the document for writing
        printWindow.print(); // Print the window
    }    
});
