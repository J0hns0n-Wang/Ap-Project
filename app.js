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
const addName = document.querySelector(".add-name-area")

console.log(addName)

let incomeHistoryArr = []
let expenseHistoryArr = []
let balanceNumber = 0
let totalIncomeNumber = 0
let totalExpenseNumber = 0

balance.innerHTML = `Balance: $${balanceNumber}`
totalIncome.innerHTML = `Balance: $${totalIncomeNumber}`
totalExpense.innerHTML = `Balance: $${totalExpenseNumber}`

let date = new Date()
let month = date.getMonth() + 1 //.getMonth returns number from 0 to 11
let day = date.getDate()
let year = date.getFullYear()
let dateNow = `${month}/${day}/${year}`
console.log(dateNow)


addBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const addNameParam = addName.value
    const addValueParam = addArea.value
    let income = {
        date: `${dateNow}`,
        name: `${addNameParam}`,
        amount:`${addValueParam}`
        
    }
    let expense = {
        date: `${dateNow}`,
        name: `${addNameParam}`,
        amount:`${addValueParam}`
        
    }
    // if(addValueParam !=  Number){
    //     alert("hi")
    // }
    if(addValueParam < 0){
        expenseHistoryArr.push(expense)
    }else{
        incomeHistoryArr.push(income)
    }
    // switch('hi'){
    //     case addValueParam != Number:
    //         alert('hi');
    //         break;
    //         case addValueParam < 0:
    //             expenseHistoryarr.push(expense);
    //             break;
    //             default:
    //                 incomeHistoryarr.push(income)
    // }
console.log(addNameParam)
console.log(addValueParam)
console.log(incomeHistoryArr)
console.log(expenseHistoryArr)
incomeHistoryArr.forEach((income) => {
    incomeHistory.insertAdjacentHTML(
      "beforeend",
      `<div class="income-date">${income.date}</div>
      <div class="income-name">${income.name}</div>
      <div class="income-amount">${income.amount}</div>
      <button type="button" class="del-button">Delete</button> `
    );
  });
  expenseHistoryArr.forEach((expense) => {
    expenseHistory.insertAdjacentHTML(
      "beforeend",
      `<div class="income-date">${expense.date}</div>
      <div class="income-name">${expense.name}</div>
      <div class="income-amount">${expense.amount}</div>
      <button type="button" class="del-button">Delete</button> `
    );
  });
 
  let newIncome = addValueParam
  totalIncome.innerHTML = `$${newIncome}`
  let newBalance = balanceNumber + newIncome
  balance.innerHTML = `$${newBalance}`

})

