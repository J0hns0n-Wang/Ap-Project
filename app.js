console.log("connected")

const balance = document.querySelector(".balance")
const totalIncome = document.querySelector(".income-header")
const incomeHistory = document.querySelector(".income-history")
const totalExpense = document.querySelector(".expense-header")
const expenseHistory = document.querySelector(".expense-history")
const delBtn = document.querySelector(".del-button")
const addBtn = document.querySelector(".add-button")
const addForm = document.querySelector(".add-form")
const addArea = document.querySelector(".add-form-area")

console.log(addArea)

let incomeHistoryarr = []
let expenseHistoryarr = []
let balanceNumber = 0
let totalIncomeNumber = 0
let totalExpenseNumber = 0

balance.innerHTML = `Balance: $${balanceNumber}`


