import { OrderPage } from '.';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { getOrders } from '../../api/orders-api';

const orderData = {
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

jest.mock('../../api/orders-api')



describe('Order page', () => {
    beforeEach(() => {
        (getOrders as jest.Mock).mockResolvedValue(orderData);
    })

    test('renders cards if request succeeds', async () => {
        render(<MemoryRouter><OrderPage /></MemoryRouter>)

        // Get loading element
        const loadingElement = screen.getByText('Loading...')
        await waitForElementToBeRemoved(loadingElement)

        // Get test ids
        const orderCardElements = screen.getAllByTestId('CollectionItem');
        const orderCardName = screen.getByTestId('CollectionItem_Name');
        const orderCardImg = screen.getByTestId('CollectionItem_Img');

        expect(getOrders).toHaveBeenCalled()
        expect(orderCardElements).toHaveLength(1);
        expect(orderCardName).toHaveTextContent(orderData.result[0].sell.data.properties.name);
        expect(orderCardImg).toHaveAttribute('src', orderData.result[0].sell.data.properties.image_url);
    })
})
