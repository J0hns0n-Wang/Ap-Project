console.log("connected");

const balance = document.querySelector(".balance");
const totalIncome = document.querySelector(".income-header");
const incomeHistory = document.querySelector(".income-history");
const totalExpense = document.querySelector(".expense-header");
const expenseHistory = document.querySelector(".expense-history");
const addBtn = document.querySelector(".add-button");
const addForm = document.querySelector(".add-form");
const addArea = document.querySelector(".add-form-area");
const addName = document.querySelector(".add-name-area");
const onlyNumber = document.querySelector(".only-number");
const inputName = document.querySelector(".input-name");
const inputNumber = document.querySelector(".input-number");
const resetBtn = document.querySelector(".reset-button");

console.log(resetBtn);

let incomeHistoryArr = [];
let incomeAmountArr = [0];
let expenseAmountArr = [0];
let expenseHistoryArr = [];
let balanceNumber = 0;
let totalIncomeNumber = 0;
let totalExpenseNumber = 0;

balance.innerHTML = `Balance: $${balanceNumber}`;
totalIncome.innerHTML = `Income: $${totalIncomeNumber}`;
totalExpense.innerHTML = `Expense: $${totalExpenseNumber}`;

let date = new Date();
let month = date.getMonth() + 1; //.getMonth returns number from 0 to 11
let day = date.getDate();
let year = date.getFullYear();
let dateNow = `${month}/${day}/${year}`;
console.log(dateNow);

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let incomeHistoryArr = [];
  let expenseHistoryArr = [];
  const addNameParam = addName.value;
  const addValueParam = addArea.value;
  const income = {
    date: `${dateNow}`,
    name: `${addNameParam}`,
    amount: `${addValueParam}`,
  };
  const expense = {
    date: `${dateNow}`,
    name: `${addNameParam}`,
    amount: `${addValueParam}`,
  };
  if (addValueParam != Number) {
    onlyNumber.style.display = "flex";
  }
  if (addNameParam === "") {
    inputName.style.display = "flex";
    onlyNumber.style.display = "none";
  } else {
    inputName.style.display = "none";
  }
  if (addValueParam === "") {
    inputNumber.style.display = "flex";
    onlyNumber.style.display = "none";
  } else {
    inputNumber.style.display = "none";
  }

  function addExpense() {
    if (addValueParam < 0) {
      const obj1 = JSON.parse(expense.amount);
      expenseHistoryArr.push(expense);
      expenseAmountArr.push(obj1);
      onlyNumber.style.display = "none";
      inputNumber.style.display = "none";
    }
  }
  addExpense();
  function addIncome() {
    console.log(income.amount);
    if (addValueParam > 0) {
      const obj = JSON.parse(income.amount);
      incomeHistoryArr.push(income);
      incomeAmountArr.push(obj);
      onlyNumber.style.display = "none";
      inputNumber.style.display = "none";
    }
  }
  addIncome();

  console.log(incomeAmountArr);
  console.log(expenseAmountArr);
  console.log(addNameParam);
  console.log(incomeHistoryArr);
  console.log(expenseHistoryArr);
  incomeHistoryArr.forEach((income) => {
    incomeHistory.insertAdjacentHTML(
      "beforeend",
      `<div class="income-container">
      <div class="income-list">${income.date}</div>
      <div class="income-list">${income.name}</div>
      <div class="income-list income-amount">+$${income.amount}</div>
      </div> `
    );
  });
  expenseHistoryArr.forEach((expense) => {
    expenseHistory.insertAdjacentHTML(
      "beforeend",
      `<div class="expense-container">
      <div class="expense-list">${expense.date}</div>
      <div class="expense-list">${expense.name}</div>
      <div class="expense-list expense-amount">$${expense.amount}</div>
      </div> `
    );
  });
  function calcBudget() {
    const reducer2 = (previousValue, currentValue) =>
      previousValue + currentValue;
    let expenseBudget = expenseAmountArr.reduce(reducer2);
    totalExpense.innerHTML = `Expense: $${expenseBudget}`;
    console.log(expenseAmountArr.reduce(reducer2));

    const reducer = (previousValue, currentValue) =>
      previousValue + currentValue;
    let incomeBudget = incomeAmountArr.reduce(reducer);
    totalIncome.innerHTML = `Income: $${incomeBudget}`;
    console.log(incomeAmountArr.reduce(reducer));

    let balanceNumber = expenseBudget + incomeBudget;
    balance.innerHTML = `Balance: $${balanceNumber}`;
  }
  calcBudget();
});

resetBtn.addEventListener("click", () => {
  window.location.reload();
});
