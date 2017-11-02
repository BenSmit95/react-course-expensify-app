import authReducer from '../../reducers/auth';

test('Should set uid for login', () => {
    const uid = '14126sva1'
    const action = {
        type: 'LOGIN',
        uid
    }
    const state = authReducer({}, action);
    expect(state).toEqual({ uid });
});

test('should clear uid for logout', () => {
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer({ uid: '412' }, action);
    expect(state).toEqual({});
});