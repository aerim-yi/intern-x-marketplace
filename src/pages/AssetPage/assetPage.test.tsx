import { AssetPage } from './index';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { getUserAssets } from '../../api/assets-api';
import { useWalletHook } from '../../components/NavBar/useWallethook';

const assetData = {
    result: [{
        image_url: 'img',
        collection: {
            name: 'colllectionName'
        },
        name: 'testname',
    }]
}

const wallet = {
    walletInfo: {
        address: "0xe3ece548F1DD4B1536Eb6eE188fE35350bc1aa1a"
    }
}

jest.mock('../../api/assets-api');
jest.mock('../../components/NavBar/useWallethook')

describe('Asset page', () => {
    beforeEach(() => {
        (useWalletHook as jest.Mock).mockReturnValue(wallet);
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
