import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should setup REMOVE_EXPENSE action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({ 
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('Should setup EDIT_EXPENSE action object', () => {
    const action = editExpense('123abc', {
        description: 'kek',
        amount: 123.41,
        createdAt: 1000
    });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            description: 'kek',
            amount: 123.41,
            createdAt: 1000
        }
    });
});

test('Should setup ADD_EXPENSE action object with provided values', () => {
    const expenseData = {
        description: 'rent',
        amount: 109500,
        createdAt: 1000,
        note: 'this was last months rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('Should setup ADD_EXPENSE action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    })
});