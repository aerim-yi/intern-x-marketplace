import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import CollectionPage from './index'

const testData = {
    result: [{
        name: 'name',
        collection_image_url: 'url'
    }]
}

jest.mock('../../api/collections-api', () => ({
    getCollections: () => Promise.resolve(testData)
}));

describe('Collection page', () => {
    test('renders cards if request succeeds', async () => {
        render(<MemoryRouter><CollectionPage /></MemoryRouter>)

        // Get loading element
        const loadingElement = screen.getByText('Loading...')
        await waitForElementToBeRemoved(loadingElement)

        // Get test ids
        const collectionCardElements = screen.getAllByTestId('collectionCard');
        const collectionCardName = screen.getByTestId('collectionCardName');
        const collectionCardImg = screen.getByTestId('collectionCardImg');

        expect(collectionCardElements).not.toHaveLength(0);
        expect(collectionCardName).toHaveTextContent(testData.result[0].name);
        expect(collectionCardImg).toHaveAttribute('src', testData.result[0].collection_image_url);
    })
})
