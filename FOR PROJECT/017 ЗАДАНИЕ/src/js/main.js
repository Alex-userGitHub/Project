let data = document.querySelectorAll(".data"),
btnStartCount = document.getElementById("start"),
budget = document.getElementsByClassName(".budget-value") [0], 
daybudget = document.getElementsByClassName(".daybudget-value") [0], 
level = document.getElementsByClassName(".level-value") [0], 
expenses = document.getElementsByClassName(".expenses-value") [0], 
optionalexpenses = document.getElementsByClassName(".optionalexpenses-value") [0], 
income = document.getElementsByClassName(".income-value") [0], 
monthsavings = document.getElementsByClassName(".monthsavings-value") [0], 
yearsavings = document.getElementsByClassName(".yearsavings-value") [0], 

expensesItem = document.getElementsByClassName(".expenses-item"),
expensesBtn = document.getElementsByTagName("button") [0], //ищет по тегу - в данном случае по "buttton", в др случае к примеру по div
optionalExpensesBtn = document.getElementsByTagName("button") [1],
countBtn = document.getElementsByTagName("button") [2],
optionalexpensesItem = document.querySelectorAll(".optionalExpenses-item"),
incomeItem = document.querySelector(".choose-income"),
checkSavings = document.querySelector("#savings"),
sumValue = document.querySelector("#sum"),
percentValue = document.querySelector("#percent"),
yearValue = document.querySelector(".year"),
monthValue = document.querySelector(".month");


let money, time;

btnStartCount.addEventListener("click", function() {
    time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");
    money = +prompt("Ваш бюджет на месяц?", "");
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    appData.budget = money;
    appData.time = time;
    budget.textContent = money.toFixed();
});
let appData = {
    budget: money,
    expenses: {},
    timeData: time,
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            a = prompt("Введите обязательную статью расходов в этом месяце", "");
            b = prompt("Во сколько обойдется?", "");

            if ((typeof (a)) === "String" && (typeof (a)) != null && (typeof (b)) != null &&
                a != "" && b != "" && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                i = i - 1; //была допущена ошибка
            }
        }
    },
    detectDayBudget: function () {
        appDataMoney.PerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет:" + appDataMoney.PerDay);
    },
    detectLevel: function () {
        if (appDataMoney.PerDay < 100) {
            Console.log("Минимальный уровень достатка");
        } else if (appDataMoney.PerDay > 100 && appDataMoney.PerDay < 2000) {
            console.log("средный уровень достатка");
        } else if (appDataMoney.PerDay > 2000) {
            console.log("высокий уровень");
        } else {
            console.log("допущена ошибка")
        }
    },
    checkSsvings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма вашиих накоплений?"),
                percent = +prompt("Под какойпроцент?");

            appData.monthInCome = save / 100 / 12 * percent;
            alert("доход в месяц с вашего депозита: " + appData.monthInCome);
        }
    },
    ChooseOptExpenses: function () {
        for (let i = 1; i < 3; i++) {
            let opt = prompt("Статья необязательных расходов?", "");
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function () {
        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
        appData.income = items.split(", ");
        appData.income.push(prompt("Может имеется дополнительный источник финансирования?", ""));
        appData.income.sort();
    }

};

console.log("budget");
