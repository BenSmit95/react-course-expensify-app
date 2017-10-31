const getExpensesTotal = (expenses = []) => {
    return expenses.reduce((accumulator, currentExpense) => (
        accumulator + currentExpense.amount
    ), 0);
}

export default getExpensesTotal;