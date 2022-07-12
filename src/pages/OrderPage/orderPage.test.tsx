import OrderPage from '.';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'

jest.mock('../../api/orders-api');

describe('Order page', () => {
    test('renders cards if request succeeds', async () => {
        // <Link> componeent does not work without a <Router> component.
        // Using <MemoryRouter> as a  workaround: https://stackoverflow.com/questions/63513697/react-testing-library-invariant-failed-you-should-not-use-route-outside-a-ro

        // getOrders()
        render(<MemoryRouter><OrderPage /></MemoryRouter>)
        // Get loading element
        const loadingElement = screen.getByText('Loading...')
        await waitForElementToBeRemoved(loadingElement)
        const orderCardElements = screen.getAllByTestId('orderCard');
        expect(orderCardElements).not.toHaveLength(0);
    })
})
