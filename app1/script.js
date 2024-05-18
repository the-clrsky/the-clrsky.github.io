"use strict";

const errorMesgEl = document.querySelector('.error_message');
const budgetInputEl = document.querySelector('.budget_input');
const expenseDelEl = document.querySelector('.expense_input');
const expenseAmountEl = document.querySelector('.expense_amount');
const tblRecordEl = document.querySelector('.tbl_data');
const cardsContainer = document.querySelector('.cards');

// Cards Content
const budgetCardEl = document.querySelector('.budget_card');
const expensesCardEl = document.querySelector('.expenses_card');
const balanceCardEl = document.querySelector('.balance_card');

let itemList = [];
let itemId = 1; // Start itemId from 1

// Button Events
function btnEvents() {
    const btnBudgetCal = document.querySelector('#btn_budget');
    const btnExpensesCal = document.querySelector('#btn_expenses');

    // Budget Events
    btnBudgetCal.addEventListener('click', (e) => {
        e.preventDefault();
        budgetFun();
    });

    // Expense Events
    btnExpensesCal.addEventListener('click', (e) => {
        e.preventDefault();
        expensesFun();
    });
}

// Calling Buttons Event
document.addEventListener("DOMContentLoaded", btnEvents);

function expensesFun() {
    let expensesDescValue = expenseDelEl.value;
    let expenseAmountValue = expenseAmountEl.value;

    if (expensesDescValue === "" || expenseAmountValue === "" || budgetInputEl.value < 0) {
        errorMessage("Please Enter Expense Details or Expense Amount");
    } else {
        let amount = parseInt(expenseAmountValue);

        // Store Value inside the object
        let expenses = {
            id: itemId,
            title: expensesDescValue,
            amount: amount,
        };
        itemId++;
        itemList.push(expenses);

        // Add expenses inside the HTML Page
        addExpenses(expenses);
        showBalance();

        // Clear input fields
        expenseDelEl.value = "";
        expenseAmountEl.value = "";
    }
}

// Add Expenses
function addExpenses(expensesPara) {
    const HTML = `<ul class="tbl_tr_content">
                    <li data-id=${expensesPara.id}>${expensesPara.id}</li>
                    <li>${expensesPara.title}</li>
                    <li><span>৳</span>${expensesPara.amount}</li>
                    <li>
                        <button type="button" class="btn_edit">Edit</button>
                        <button type="button" class="btn_delete">Delete</button>
                    </li>
                  </ul>`;
    tblRecordEl.insertAdjacentHTML("beforeend", HTML);

    // Edit
    const btnEdit = document.querySelectorAll('.btn_edit');
    const btnDel = document.querySelectorAll('.btn_delete');

    // Button Edit Event
    btnEdit.forEach((btnEdit) => {
        btnEdit.addEventListener("click", (el) => {
            const element = el.target.parentElement.parentElement;
            const id = element.querySelector('li').dataset.id;
            element.remove();

            const expense = itemList.find(item => item.id == id);
            expenseDelEl.value = expense.title;
            expenseAmountEl.value = expense.amount;

            itemList = itemList.filter(item => item.id != id);
            showBalance();
        });
    });

    // Button Delete
    btnDel.forEach((btnDel) => {
        btnDel.addEventListener("click", (el) => {
            const element = el.target.parentElement.parentElement;
            const id = element.querySelector('li').dataset.id;
            element.remove();

            itemList = itemList.filter(item => item.id != id);
            showBalance();
        });
    });
}

// Budget Function
function budgetFun() {
    const budgetValue = budgetInputEl.value;
    if (budgetValue === "" || isNaN(budgetValue) || parseFloat(budgetValue) <= 0) {
        // If the budget value is invalid, display an error message
        errorMessage("Enter a valid budget amount.");
        errorMesgEl.innerHTML = "<p>Enter a valid Budget</p>";
    } else {
        // If the budget value is valid, clear the error message
        errorMesgEl.innerHTML = "";
        // Set the budget card with the entered budget value
        budgetCardEl.textContent = budgetValue;
        budgetInputEl.value = "";
        showBalance();
    }
}

// Show Balance
function showBalance() {
    const expenses = totalExpenses();
    const total = parseInt(budgetCardEl.textContent) - expenses;
    balanceCardEl.textContent = total;
}

// Total Expenses
function totalExpenses() {
    let total = 0;

    if (itemList.length > 0) {
        total = itemList.reduce(function (acc, curr) {
            acc += curr.amount;
            return acc;
        }, 0);
    }
    expensesCardEl.textContent = total;
    return total;
}

// Error Message Function
function errorMessage(message) {
    errorMesgEl.innerHTML = `<p>${message}</p>`;
    errorMesgEl.classList.add("error");
    setTimeout(() => {
        errorMesgEl.classList.remove("error");
    }, 2500);
}

// Print 
document.addEventListener('DOMContentLoaded', function() {
    const btnPrint = document.querySelector('#btn_print');
    const eventInputEl = document.querySelector('.event_input');

    btnPrint.addEventListener('click', function() {
        printPage(eventInputEl.value);
    });
});

function printPage(eventName) {
    const budget = document.querySelector('.budget_card').textContent;
    const expenses = document.querySelector('.expenses_card').textContent;
    const balance = document.querySelector('.balance_card').textContent;

    const expenseDetails = itemList.map(item => `
        <tr>
            <td>${item.id}</td>
            <td>${item.title}</td>
            <td>৳${item.amount}</td>
        </tr>
    `).join('');

    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${eventName}</title>
            <style>
                body {
                    font-family: "Poppins", sans-serif;
                    padding: 20px;
                }
                h1, h2 {
                    text-align: center;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 20px;
                }
                table, th, td {
                    border: 1px solid #ddd;
                }
                th, td {
                    padding: 8px;
                    text-align: left;
                }
                th {
                    background-color: #f2f2f2;
                }
                .card {
                    display: inline-block;
                    margin: 20px 10px;
                    padding: 20px;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                }
                .card span {
                    display: block;
                    font-size: 1.5rem;
                }
            </style>
        </head>
        <body>
            <h1>${eventName}</h1>
            <div class="card">
                <h2>Budget</h2>
                <span>৳${budget}</span>
            </div>
            <div class="card">
                <h2>Expenses</h2>
                <span>৳${expenses}</span>
            </div>
            <div class="card">
                <h2>Balance</h2>
                <span>৳${balance}</span>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Details</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    ${expenseDetails}
                </tbody>
            </table>
        </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
}

