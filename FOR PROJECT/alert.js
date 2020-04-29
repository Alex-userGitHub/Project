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