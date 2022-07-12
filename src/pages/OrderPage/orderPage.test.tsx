import OrderPage from '.';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'

const testData = {
    result: [{
        sell: {
            data: {
                properties: {
                    image_url: 'img',
                    name: 'name',
                    price: '2.57 ETH'
                }
            }
        },
    }]
}

jest.mock('../../api/orders-api', () => ({
    getOrders: () => Promise.resolve(testData)
}));

describe('Order page', () => {
    test('renders cards if request succeeds', async () => {
        render(<MemoryRouter><OrderPage /></MemoryRouter>)

        // Get loading element
        const loadingElement = screen.getByText('Loading...')
        await waitForElementToBeRemoved(loadingElement)

        // Get test ids
        const orderCardElements = screen.getAllByTestId('orderCard');
        const orderCardName = screen.getByTestId('orderCardName');
        const orderCardImg = screen.getByTestId('orderCardImg');

        expect(orderCardElements).not.toHaveLength(0);
        expect(orderCardName).toHaveTextContent(testData.result[0].sell.data.properties.name);
        expect(orderCardImg).toHaveAttribute('src', testData.result[0].sell.data.properties.image_url);

    })

})
