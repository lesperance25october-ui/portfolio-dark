const incomeInput = document.getElementById('income');
const expenseInput = document.getElementById('expense');
const balanceInput = document.getElementById('balance');
const calculateBtn = document.getElementById('calculate');

calculateBtn.addEventListener('click', () => {
    const income = parseFloat(incomeInput.value) || 0;
    const expense = parseFloat(expenseInput.value) || 0;
    balanceInput.value = income - expense;
});
