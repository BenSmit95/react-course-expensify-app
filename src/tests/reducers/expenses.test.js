import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses'

test('Should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('Should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('Should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('Should add an expense', () => {
    const expense = {
        id: '4',
        description: 'Buy cheese',
        amount: 200,
        note: '',
        createdAt: 0
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('Should edit an expense by id', () => {
    const updates = {
        note: 'My landlord sucks'
    };
    const state = expensesReducer(expenses, {
        type: 'EDIT_EXPENSE',
        id: expenses[2].id,
        updates
    });
    expect(state).toEqual([expenses[0], expenses[1], {...expenses[2], ...updates}]);
});

test('Should not edit expense if id not found', () => {
    const updates = {
        note: 'My landlord sucks'
    };
    const state = expensesReducer(expenses, {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates
    });
    expect(state).toEqual(expenses);
});