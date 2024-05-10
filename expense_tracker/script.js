document.addEventListener('DOMContentLoaded', function() {
    const expenseForm = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');
    const totalExpenses = document.getElementById('total-expenses');

    let expenses = [];

    expenseForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const amount = parseFloat(document.getElementById('amount').value);
        const category = document.getElementById('category').value;
        const date = new Date().toLocaleDateString();

        if (name && !isNaN(amount) && category) {
            const expense = { name, amount, category, date };
            expenses.push(expense);
            updateExpenseList();
            updateTotalExpenses();
            expenseForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });

    function updateExpenseList() {
        expenseList.innerHTML = '';
        expenses.forEach(function(expense) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${expense.name}</td>
                <td>${expense.amount}</td>
                <td>${expense.category}</td>
                <td>${expense.date}</td>
            `;
            expenseList.appendChild(row);
        });
    }

    function updateTotalExpenses() {
        const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
        totalExpenses.textContent = total.toFixed(2);
    }
});
