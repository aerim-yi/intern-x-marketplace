import { AssetPage } from './index';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { getUserAssets } from '../../api/assets-api';

const assetData = {
    result: [{
        image_url: 'img',
        collection: {
            name: 'colllectionName'
        },
        name: 'testname',
    }]
}

jest.mock('../../api/assets-api');

describe('Asset page', () => {
    beforeEach(() => {
        window.localStorage.setItem('WALLET_ADDRESS', JSON.stringify({ 'address': 'hsgjgda' }));
        (getUserAssets as jest.Mock).mockResolvedValue(assetData);
    });

    test('renders cards if request succeeds', async () => {
        render(<MemoryRouter><AssetPage /></MemoryRouter>)

        // Get loading element
        const loadingElement = screen.getByText('Loading...')
        await waitForElementToBeRemoved(loadingElement)

        // Get test ids
        const assetCardElements = screen.getAllByTestId('AssetCard');
        const assetCardName = screen.getByTestId('AssetCard_Name');
        const assetCardCollectionName = screen.getByTestId('AssetCard_CollectionName');

        expect(getUserAssets).toHaveBeenCalled()
        expect(assetCardElements).toHaveLength(1);
        expect(assetCardName).toHaveTextContent(assetData.result[0].name);
        expect(assetCardCollectionName).toHaveTextContent(assetData.result[0].collection.name);
    })
})
