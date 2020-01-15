const account = {
    name: 'Marcus',
    income: [],
    expenses: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        this.expenses.forEach(function (exp) {
            totalExpenses += exp.amount
        })

        let totalIncome = 0
        this.income.forEach(function (inc) {
            totalIncome += inc.amount
        })
        const balance = totalIncome - totalExpenses
        return `${this.name} has a balance of $${balance}. $${totalIncome} in income. $${totalExpenses} in expenses.`
    }
}

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())