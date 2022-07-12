import AssetPage from './index';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'

const testData = {
    result: [{
        image_url: 'img',
        collection: {
            name: 'colllectionName'
        },
        name: 'testname',
    }]
}

jest.mock('../../api/assets-api', () => ({
    getUserAssets: () => Promise.resolve(testData)
}));

describe('Asset page', () => {
    beforeEach(() => {
        window.localStorage.setItem('WALLET_ADDRESS', 'address')
    });

    test('renders cards if request succeeds', async () => {
        render(<MemoryRouter><AssetPage /></MemoryRouter>)

        // Get loading element
        const loadingElement = screen.getByText('Loading...')
        await waitForElementToBeRemoved(loadingElement)

        // Get test ids
        const assetCardElements = screen.getAllByTestId('assetCard');
        const assetCardName = screen.getByTestId('assetCardName');
        const assetCardCollectionName = screen.getByTestId('assetCardCollectionName');

        expect(assetCardElements).not.toHaveLength(0);
        expect(assetCardName).toHaveTextContent(testData.result[0].name);
        expect(assetCardCollectionName).toHaveTextContent(testData.result[0].collection.name);
    })
})
