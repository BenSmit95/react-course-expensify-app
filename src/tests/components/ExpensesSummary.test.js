import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('Should render ExpensesSummary component correctly', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={500} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpensesSummary with expenses data', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={3} expensesTotal={500000} />);
    expect(wrapper).toMatchSnapshot();
});