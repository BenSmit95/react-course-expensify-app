import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('Should return 0 if no expenses', () => {
    const value = getExpensesTotal();
    expect(value).toBe(0);
});

test('Should correctly add up a single expense', () => {
    const value = getExpensesTotal([expenses[1]]);
    expect(value).toBe(expenses[1].amount);
});

test('Should correctly add up multiple expenses', () => {
    const value = getExpensesTotal(expenses);
    expect(value).toBe((expenses[0].amount + expenses[1].amount + expenses[2].amount));
});