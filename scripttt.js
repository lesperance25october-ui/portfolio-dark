const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const expenseCategory = document.getElementById("expenseCategory");
const addBtn = document.getElementById("addBtn");
const expenseList = document.getElementById("expenseList");
const totalAmount = document.getElementById("totalAmount");

// Load expenses from storage
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
renderExpenses();

// Add expense
addBtn.addEventListener("click", () => {
    if (expenseName.value === "" || expenseAmount.value === "") {
        alert("Please fill all fields.");
        return;
    }

    const newExpense = {
        id: Date.now(),
        name: expenseName.value,
        amount: Number(expenseAmount.value),
        category: expenseCategory.value
    };

    expenses.push(newExpense);
    saveAndRender();

    // Reset fields
    expenseName.value = "";
    expenseAmount.value = "";
});

// Delete expense
function deleteExpense(id) {
    expenses = expenses.filter(exp => exp.id !== id);
    saveAndRender();
}

// Save to localStorage
function saveAndRender() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
    renderExpenses();
}

// Render UI
function renderExpenses() {
    expenseList.innerHTML = "";
    let total = 0;

    expenses.forEach(exp => {
        total += exp.amount;

        const li = document.createElement("li");
        li.classList.add("expense-item");

        li.innerHTML = `
            <span>${exp.name} — SCR ${exp.amount} (${exp.category})</span>
            <span class="delete-btn" onclick="deleteExpense(${exp.id})">X</span>
        `;

        expenseList.appendChild(li);
    });

    totalAmount.innerText = total;
}
