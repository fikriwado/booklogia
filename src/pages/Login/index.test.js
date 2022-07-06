import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Login from './index';
import store from '../../redux/store';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';

const setup = () =>
    render(
        <Provider store={store}>
            <Login />
        </Provider>
    );

describe('Search components should be render', () => {
    beforeEach(setup);
    afterEach(cleanup);

    it('Success render Login component', () => {
        expect(screen.getByLabelText('input-email')).toBeInTheDocument();
        expect(screen.getByLabelText('input-password')).toBeInTheDocument();
    });

    it('Search email value should be same as user typing', () => {
        const inputEmail = screen.getByLabelText('input-email');
        userEvent.type(inputEmail, 'testing@gmail.com');

        expect(inputEmail.value).toBe('testing@gmail.com');
    });
});
