let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}

start();

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
let data = document.querySelectorAll(".data");
btnStartCount = document.getElementById("start");
budget = document.querySelectorAll(".budget-value"); 
daybudget = document.querySelectorAll(".daybudget-value"); 
level = document.querySelectorAll(".level-value"); 
expenses = document.querySelectorAll(".expenses-value"); 
optionalexpenses = document.querySelectorAll(".optionalexpenses-value"); 
income = document.querySelectorAll(".income-value"); 
monthsavings = document.querySelectorAll(".monthsavings-value"); 
yearsavings = document.querySelectorAll(".yearsavings-value"); 
buttons = document.getElementsByTagName("button"); //ищет по тегу - в данном случае по "buttton", в др случае к примеру по div
accept1 = document.querySelector(".expenses-item-btn");
accept2 = document.querySelector(".optionalexpenses-btn");
count = document.querySelector(".count-budget-btn");
optionalexpensesFields = document.querySelectorAll(".optionalExpenses-itm");
thePossibleMoney = document.querySelector(".choose-income");
checkBox = document.querySelector("#savings");
sum = document.querySelector("#sum");
percent = document.querySelector("#percent");
year = document.querySelector(".year");
month = document.querySelector(".month");
day = document.querySelector(".day");
console.log(data);
console.log(btnStartCount);
console.log(budget);
console.log(daybudget);
console.log(level);
console.log(expenses);
console.log(optionalexpenses);
console.log(income);
console.log(monthsavings);
console.log(yearsavings);
console.log(buttons);
console.log(accept1);
console.log(accept2);
console.log(count);
console.log(optionalexpensesFields);
console.log(thePossibleMoney);
console.log(checkBox);
console.log(sum);
console.log(percent);
console.log(year);
console.log(month);
console.log(day);

