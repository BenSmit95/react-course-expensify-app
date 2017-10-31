import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('Should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('Should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('Should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('Should set text filter', () => {
    const state = filtersReducer(undefined, { 
        type: 'SET_TEXT_FILTER', 
        text: 'cheese' 
    });
    expect(state.text).toBe('cheese');
});

test('Should set startDate filter', () => {
    const startDate = moment(0);
    const state = filtersReducer(undefined, {
        type: 'SET_START_DATE',
        startDate
    });
    expect(state.startDate).toEqual(startDate);
});

test('Should set endDate filter', () => {
    const endDate = moment(0);
    const state = filtersReducer(undefined, {
        type: 'SET_END_DATE',
        endDate
    });
    expect(state.endDate).toEqual(endDate);
});